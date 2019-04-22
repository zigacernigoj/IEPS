// pushdown advertizunk //
var am_pd_el;
if (typeof am_pd_speed === 'undefined') {var am_pd_speed = 200;}
if (typeof am_pd_closedh === 'undefined') {var am_pd_closedh = 25;}
if (typeof am_pd_openh === 'undefined') {var am_pd_openh = 500;}

function jqueryLoaded() {
  am_pd_el = $('div#am_pd_banner');
  am_pd_el.css('clear','both');
}

function am_pd_close(speed) {
  //console && //console.log("am_pd closing");
  if (typeof speed === 'undefined') {
    speed = am_pd_speed;
  }
  am_pd_el.animate({'height': am_pd_closedh}, speed);
}

function am_pd_open(height, speed) {
  //console && //console.log("am_pd opening");
  if (typeof speed === 'undefined') {
    speed = am_pd_speed;
  }
  if (typeof height === 'undefined') {
    height = am_pd_openh;
  }
  if (window.jQuery) {
    if (height > 515) {
      height = 515;
    }
    am_pd_el.animate({'height': height}, speed);
  } else {
    window.setTimeout(am_pd_open(height,speed),100);
  }
  am_pd_track();
}

function am_pd_track(t_url){
    if (typeof t_url === 'undefined')  {
        //console && //console.log("No tracking URL");
    } else {
        if (typeof t_url === 'undefined')  {
            t_url = am_pd_trackURL;
        }
        if (t_url.indexOf('?') == -1) {
            t_url = t_url + '?am_ccb=' + new Date().getTime();
        } else {
            t_url = t_url + '&am_ccb=' + new Date().getTime();
        }
        var image = new Image(0,0);
        image.src = t_url;
        //console && //console.log("am_pd tracking ("+ t_url +")");
    }
}

function checkJquery() {
    if (window.jQuery) {
        jqueryLoaded();
    } else {
        var oHead = document.getElementsByTagName('HEAD').item(0);
        var oScript= document.createElement("script");
        oScript.type = "text/javascript";
        oScript.src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
        oHead.appendChild( oScript);
        window.setTimeout(checkJquery, 250);
    }
}
checkJquery();

function expand() {
    am_pd_open();
}

function retract() {
    am_pd_close();
}
