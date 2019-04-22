'function'==typeof contentExchangeLoad ? contentExchangeLoad() : (function(w,doc) {
  w._contentExchange = w._contentExchange || {};
  var cx = w._contentExchange,
      base = 'https://tracker.contentexchange.me/widget/',
      _callback_widgets = {},
      perf = (typeof performance !== 'undefined' && typeof performance.now === 'function') || false,
      uuid = function uuid() {
        var d = Date.now();
        if (perf) d += performance.now(); //use high-precision timer if available
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
      },
//      uuid = function uuid(a) {return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,uuid)},
      guid = function guid() {return Math.random().toString(36).substr(2)},
      is_frame = parent!=w,
      hasStore = (function () {try { return !!w.localStorage;} catch (e) {return false; }})(), //can I save without security warning?
	    canStore = is_frame && hasStore && (function(mod) {
	      try {localStorage.setItem(mod, mod);localStorage.removeItem(mod);return true;}
	      catch(e) {return false;}
	    })('modernizr');
	    checkPageview = function checkPageview() {
        var docref = doc.referrer || doc.referer,
            url = is_frame ? docref : location.href.replace(location.hash,''),
            ref = is_frame ? 'iframe' : docref,
            domain = url.split('/')[2],
            now = new Date(),
            doSend = false,
            old_pv = cx.pv || canStore && localStorage.getItem('cx_pv'),
            old_url = cx.url || canStore && localStorage.getItem('cx_url');
//console.log(is_frame?'frame':'doc',old_pv,old_url,localStorage);
        cx.pv = old_pv || uuid();
        if (old_pv != cx.pv) {
          cx.url = url;
          cx.ref = ref;
          doSend = true;
        } else if (old_url!=url) { // check if different url
          cx.pv = uuid();
          cx.ref = old_url;
          cx.url = url;
          doSend = true;
        }
        if (doSend) {
          cx.tz = now.getTimezoneOffset();
          cx.cs = doc.characterSet || doc.charset;
          if (perf) cx.ns = performance.timing.navigationStart; //request start
          cx.ts = now.getTime();
          cx.screen = [ screen.height, screen.width, screen.colorDepth ].join("x");
          //dotmetrics data + ga
          if (w.localStorage.DotMetricsDeviceId) cx.ddev = w.localStorage.DotMetricsDeviceId;
          if (w.localStorage.DotMetricsUserId) cx.dusr = w.localStorage.DotMetricsUserId;
          if (canStore) {
            localStorage.setItem('cx_pv',cx.pv);
            localStorage.setItem('cx_url',cx.url);
          }
          send('pageview',cx);
        }
      },
      send = function send(ev,data) {
        if (cx.dnt) return;
        var url = 'https://collector.contentexchange.me/sl/collect?',
            qs = ['event='+ev],
            img = doc.createElement('img');
        Object.keys(data).forEach( function(k) {qs.push( k+'='+encodeURIComponent(data[k]) );} );
        url += qs.join('&');
        //console.log('sending',qs);
        img.setAttribute('src',url);
      }

  this.display_contentexchange = function(data) {
  	var elts = _callback_widgets[data.id][data.tid],
  	    now = new Date();
  	elts.widget.setAttribute('done','1');
  	elts.widget.innerHTML = cx.dnt ? data.data : data.data.replace(/\?cb[0-9]*/gi,'?pv='+cx.pv);
  	//add pageview to /in/ links
  	send('widget_impression',{pv:cx.pv, widget: data.id, posts: data.posts.join(','), ts: now.getTime()});
  	doc.body.removeChild(elts.tunnel);
  }
  this.display_trafex = this.display_contentexchange;
  var show = function(widget) {
		var id = widget.getAttribute('data-trafex-widget') || widget.getAttribute('data-contentexchange-widget'),
		    cat = widget.getAttribute('data-trafex-cat') || widget.getAttribute('data-contentexchange-cat') || '',
		    cnt = widget.getAttribute('data-trafex-count') || widget.getAttribute('data-contentexchange-count') || '';
		if (cat) cat = '/'+cat;
		if (cnt) cnt = '/'+cnt;
  	tunnel = doc.createElement('script');
  	tunnel.id = guid();
  	tunnel.type = 'text/javascript';
    tunnel.src = base+(id+'-'+tunnel.id)+cat+cnt;

    _callback_widgets[id] = _callback_widgets[id] || {};
    _callback_widgets[id][tunnel.id] = {
      widget : widget,
      tunnel: tunnel
    };

  	doc.body.appendChild(tunnel);

    var refresh = 0 | ( widget.getAttribute('data-trafex-refresh') || widget.getAttribute('data-contentexchange-refresh') );
    if (refresh) (function(widget,refresh) { setTimeout(function(){show(widget)},Math.min(refresh,30)*1000); })(widget,refresh);
  }
  this.contentExchangeLoad = function() {
    checkPageview();
		var widgets = doc.querySelectorAll('[data-trafex-widget]:not([done]),[data-contentexchange-widget]:not([done])');
		for (var i=0;i< widgets.length;i++) {
			var widget =  widgets[i];
			if (widget.queued) continue;
			widget.queued = true;
			var delay = 0 | ( widget.getAttribute('data-trafex-delay') || widget.getAttribute('data-contentexchange-delay') );
			(function(widget,delay) {setTimeout(function() {show(widget);},delay*1000);})(widget,delay);
		}
	}
	contentExchangeLoad();
})(window,document);
