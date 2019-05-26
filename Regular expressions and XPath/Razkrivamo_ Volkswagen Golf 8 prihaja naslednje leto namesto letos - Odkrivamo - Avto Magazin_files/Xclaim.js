if(xClaimSettings==undefined){var xClaimSettings={ 

        JSONPCallback: "JSONPCallback",
        CloseButtonLink: "http://slo-engine.xclaimwords.net/img/mobile-close.png",
        SearchingDiv: "intextAd",
        SearchingId: "__xclaimwords_wrapper",
        IgnoreDiv: "intextAdIgnore",
        xClaimTopElementId: "xClaimTopElement",
        iFrameHolderDivID: "xClaimPostIframe",
        iframeName: "xClaimPost",
        formInputTextName: "rijeci",
        formInputUrlName: "url",
        formInputOglasIdName: "oglasid",
        formInputPartnerIdName: "partnerid",
        CrossDomainSubmitTime: 10000,
        xClaimOblacicClass: "xClaimOblacicClass",
        mScriptLimit: "5000",
        mSkipTags: /^(\bhead\b|\btitle\b|\bscript\b|\bstyle\b|\btextarea\b|\biframe\b|\bnoscript\b|\bselect\b|\bnoembed\b|\bobject\b|\bembed\b|\ba\b|\blink\b|\bbutton\b|\bpre\b)/i,
        mTestWordEnd: " ;.!?,'\":-",
        mClassa: "xClaimClass",
        origText: [["<!--(.*?)-->", "gi"], ["<[^>]*>", "gi"], ["[^a-zA-Z0-9_čćžđšŽĆČŠĐÕÄÖÜõäöüÓóĄąĘęŁłŃńŚśŹźŻżАаБбВвГгДдЃѓЕеЖжЗзЅѕИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЌќУуФфХхЦцЧчЏџШш]", "gi"], ["&.*;", "gi"], ["\\s", "gi"]],
        replText: [" ", " ", " ", " ", " "],
        OglasIdPrefix: "xClaimOglasId-",
        OblacicIdPrefix: "xClaimOblacicId-",
        ClientMarginPaddingTop: 0,
        ClientMarginPaddingLeft: 0,
        OblacicFixElements: "iframe|object|embed",
        TimeBeforeOpen: 100,
        TimeBeforeClose: 800,
        DragAndDrop:true,
        ShowAdAfter: 3000,
        HideAdAfter: 35000,
        MobileBrowser: false,
        MobileAdHeight: 0.08,
        mobileOld: false,
        minScreenSize: 1300,
        OglasPozicijaTop: 0,
        OglasPozicijaLeft: 0,
        postRijeci: false,
        CheckParentsRecursionLimit: 2,
        IframeJsData: "http://slo-engine.intextad.net/frame.html?frameData=",
        TimeBeforeDisplayOglasiNew: 2000,
        TimeBeforeDisplayOglasiPrepared: 1000,
        StatistikaImg: "http://slo-engine.intextad.net/view.gif?",
        ProzorFlash: "http://slo-engine.intextad.net/FlashObject/master_v1008.swf",
        CrossDomainPost: "http://slo-engine.intextad.net/CrossPostPage.xclaim",
        jsonpUrl: "http://slo-engine.intextad.net/GetWords.xclaim",
        generalScriptUrl: "http://slo-engine.intextad.net/static_v1019.js",
        xClaimCss: "http://slo-engine.intextad.net/css/xclaim.css",
        brojRijeci: 700,
        Partner: {"Id":450,"Link":"https://www.avto-magazin.si/","BrojRijeci":5,"StyleRijeci":"","CustomLogo":"http://slo-engine.intextad.net/img/logoSLO.png","CustomLogoLink":"http://www.rewords.si/","SecureUnderineActive":false,"OffsetX":0,"OffsetY":0,"TestPartner":false,"PartnerAktivan":true},
        Oglasi: []
         };
                    if(window.location.href.indexOf("https://")>=0){
                            xClaimSettings.CloseButtonLink=xClaimSettings.CloseButtonLink.replace("http://", "https://");
                            xClaimSettings.IframeJsData=xClaimSettings.IframeJsData.replace("http://", "https://");
                            xClaimSettings.StatistikaImg=xClaimSettings.StatistikaImg.replace("http://", "https://");
                            xClaimSettings.ProzorFlash=xClaimSettings.ProzorFlash.replace("http://", "https://");
                            xClaimSettings.CrossDomainPost=xClaimSettings.CrossDomainPost.replace("http://", "https://");
                            xClaimSettings.jsonpUrl=xClaimSettings.jsonpUrl.replace("http://", "https://");
                            xClaimSettings.generalScriptUrl=xClaimSettings.generalScriptUrl.replace("http://", "https://");
                            xClaimSettings.xClaimCss=xClaimSettings.xClaimCss.replace("http://", "https://");
                            xClaimSettings.Partner.Link= xClaimSettings.Partner.Link.replace("http://", "https://");
                            xClaimSettings.Partner.CustomLogo= xClaimSettings.Partner.CustomLogo.replace("http://", "https://");
                        }
            var fileref=document.createElement('script');fileref.setAttribute("type","text/javascript");fileref.setAttribute("src",xClaimSettings.generalScriptUrl);if(typeof fileref!="undefined");document.getElementsByTagName("head")[0].appendChild(fileref);var fileref=document.createElement("link");fileref.setAttribute("rel","stylesheet");fileref.setAttribute("type","text/css");fileref.setAttribute("href",xClaimSettings.xClaimCss);document.getElementsByTagName("head")[0].appendChild(fileref);if(window.onXClaimSettingsLoaded){window.onXClaimSettingsLoaded();};}