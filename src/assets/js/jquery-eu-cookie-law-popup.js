$(window).load(function() {
    console.log('pop1');
    setTimeout(function(){ 
        console.log('pop2');
        (function($) {
            if (!window.console) window.console = {};
            if (!window.console.log) window.console.log = function() {};
            $.fn.euCookieLawPopup = (function() {
                var _self = this;
                _self.params = {
                    cookiePolicyUrl: 'http://hexaware.com/?cookie-policy',
                    popupPosition: 'top',
                    colorStyle: 'default',
                    compactStyle: false,
                    popupTitle: 'This site uses cookies to ensure you get the best experience on our website. By continuing to use this site, you agree to <a target="_blank" href="/privacy-policy/">our policy</a>.',
                    popupText: '',
                    buttonContinueTitle: 'I agree',
                    buttonCloseTitle: '<strong style="color:#bbb;">Close</strong>&nbsp;&nbsp;<i class="fa fa-times"></i>',
                    buttonLearnmoreTitle: '',
                    buttonLearnmoreOpenInNewWindow: true,
                    agreementExpiresInDays: 300000,
                    autoAcceptCookiePolicy: false,
                    htmlMarkup: null
                };
                _self.vars = {
                    INITIALISED: false,
                    HTML_MARKUP: null,
                    COOKIE_NAME: 'EU_COOKIE_LAW_CONSENT'
                };
                var parseParameters = function(object, markup, settings) {
                    if (object) {
                        var className = $(object).attr('class') ? $(object).attr('class') : '';
                        if (className.indexOf('eupopup-top') > -1) {
                            _self.params.popupPosition = 'top';
                        } else if (className.indexOf('eupopup-fixedtop') > -1) {
                            _self.params.popupPosition = 'fixedtop';
                        } else if (className.indexOf('eupopup-bottomright') > -1) {
                            _self.params.popupPosition = 'bottomright';
                        } else if (className.indexOf('eupopup-bottomleft') > -1) {
                            _self.params.popupPosition = 'bottomleft';
                        } else if (className.indexOf('eupopup-bottom') > -1) {
                            _self.params.popupPosition = 'bottom';
                        } else if (className.indexOf('eupopup-block') > -1) {
                            _self.params.popupPosition = 'block';
                        }
                        if (className.indexOf('eupopup-color-default') > -1) {
                            _self.params.colorStyle = 'default';
                        } else if (className.indexOf('eupopup-color-inverse') > -1) {
                            _self.params.colorStyle = 'inverse';
                        }
                        if (className.indexOf('eupopup-style-compact') > -1) {
                            _self.params.compactStyle = true;
                        }
                    }
                    if (markup) {
                        _self.params.htmlMarkup = markup;
                    }
                    if (settings) {
                        if (typeof settings.cookiePolicyUrl !== 'undefined') {
                            _self.params.cookiePolicyUrl = settings.cookiePolicyUrl;
                        }
                        if (typeof settings.popupPosition !== 'undefined') {
                            _self.params.popupPosition = settings.popupPosition;
                        }
                        if (typeof settings.colorStyle !== 'undefined') {
                            _self.params.colorStyle = settings.colorStyle;
                        }
                        if (typeof settings.popupTitle !== 'undefined') {
                            _self.params.popupTitle = settings.popupTitle;
                        }
                        if (typeof settings.popupText !== 'undefined') {
                            _self.params.popupText = settings.popupText;
                        }
                        if (typeof settings.buttonContinueTitle !== 'undefined') {
                            _self.params.buttonContinueTitle = settings.buttonContinueTitle;
                        }if (typeof settings.buttonCloseTitle !== 'undefined') {
                            _self.params.buttonCloseTitle = settings.buttonCloseTitle;
                        }
                        if (typeof settings.buttonLearnmoreTitle !== 'undefined') {
                            _self.params.buttonLearnmoreTitle = settings.buttonLearnmoreTitle;
                        }
                        if (typeof settings.buttonLearnmoreOpenInNewWindow !== 'undefined') {
                            _self.params.buttonLearnmoreOpenInNewWindow = settings.buttonLearnmoreOpenInNewWindow;
                        }
                        if (typeof settings.agreementExpiresInDays !== 'undefined') {
                            _self.params.agreementExpiresInDays = settings.agreementExpiresInDays;
                        }
                        if (typeof settings.autoAcceptCookiePolicy !== 'undefined') {
                            _self.params.autoAcceptCookiePolicy = settings.autoAcceptCookiePolicy;
                        }
                        if (typeof settings.htmlMarkup !== 'undefined') {
                            _self.params.htmlMarkup = settings.htmlMarkup;
                        }
                    }
                };
                var createHtmlMarkup = function() {
                    if (_self.params.htmlMarkup) {
                        return _self.params.htmlMarkup;
                    }
                    var html = '<div class="eupopup-container' + ' eupopup-container-' + _self.params.popupPosition + (_self.params.compactStyle ? ' eupopup-style-compact' : '') + ' eupopup-color-' + _self.params.colorStyle + '">' + '<div class="eupopup-head">' + _self.params.popupTitle + '</div>' + '<div class="eupopup-buttons">' + '<span class="eupopup-closebutton" style="float:right;cursor: pointer;">' + _self.params.buttonCloseTitle + '</span>' + '<a href="#" class="eupopup-button eupopup-button_1">' + _self.params.buttonContinueTitle + '</a>' + '<a href="' + _self.params.cookiePolicyUrl + '"' + (_self.params.buttonLearnmoreOpenInNewWindow ? ' target=_blank ' : '') + ' class="eupopup-button eupopup-button_2">' + _self.params.buttonLearnmoreTitle + '</a>'+ '<div class="clearfix"></div>' + '</div>' +
                        +'</div>';   
                    return html;
                };
                var setUserAcceptsCookies = function(consent) {
                    var d = new Date();
                    var expiresInDays = _self.params.agreementExpiresInDays * 24 * 60 * 60 * 1000;
                    d.setTime(d.getTime() + expiresInDays);
                    var expires = "expires=" + d.toGMTString();
                    document.cookie = _self.vars.COOKIE_NAME + '=' + consent + "; " + expires + ";path=/";
                    $(document).trigger("user_cookie_consent_changed", {
                        'consent': consent
                    });
                };
                var userAlreadyAcceptedCookies = function() {
                    var userAcceptedCookies = false;
                    var cookies = document.cookie.split(";");
                    for (var i = 0; i < cookies.length; i++) {
                        var c = cookies[i].trim();
                        if (c.indexOf(_self.vars.COOKIE_NAME) == 0) {
                            userAcceptedCookies = c.substring(_self.vars.COOKIE_NAME.length + 1, c.length);
                        }
                    }
                    return userAcceptedCookies;
                };
                var hideContainer = function() {
                    $('.eupopup-container').animate({
                        opacity: 0,
                        height: 0
                    }, 200, function() {
                        $('.eupopup-container').hide(0);
                    });
                };
                var publicfunc = {
                    init: function(settings) {
                        parseParameters($(".eupopup").first(), $(".eupopup-markup").html(), settings);
                        if (userAlreadyAcceptedCookies()) {
                            return;
                        }
                        if (_self.vars.INITIALISED) {
                            return;
                        }
                        _self.vars.INITIALISED = true;
                        _self.vars.HTML_MARKUP = createHtmlMarkup();
                        if ($('.eupopup-block').length > 0) {
                            $('.eupopup-block').append(_self.vars.HTML_MARKUP);
                        } else {
                            $('BODY').append(_self.vars.HTML_MARKUP);
                        }
                        $('.eupopup-button_1').click(function() {               
                            /*$('#myModal').modal('show');
                            $("#myModal").css("z-index","999999999");
                            $("#pvcy-btn").attr('data-id','cookies-email');*/
                             /*setUserAcceptsCookies(true);
                             hideContainer();*/
                             $.ajax({
                                type: 'POST',
                                url: "https://" + document.domain + "/wp-content/themes/hexaware-main/act-on/phpcurl-privacy-ip.php",
                                data: {
                                },
                                success: function(response) {
                                    if (response == '1') {
                                        setUserAcceptsCookies(true);
                                        hideContainer();
                                    }
                                }
                            });
                            return false;
                        });
                        $('.eupopup-closebutton').click(function() {
                             /*setUserAcceptsCookies(true);*/
                             hideContainer();
                            return false;
                        });
                        $('.eupopup-container').show();
                        if (_self.params.autoAcceptCookiePolicy) {
                            //setUserAcceptsCookies(true);
                        }
                    }
                };
                return publicfunc;
            });
            $(document).ready(function() {
                if ($(".eupopup").length > 0) {
                    $(document).euCookieLawPopup().init({
                        'info': 'YOU_CAN_ADD_MORE_SETTINGS_HERE',
                        'popupTitle cookie-btn-right': 'This website uses cookies to ensure you get the best experience on our website.  ',
                        'popupText': ''
                    });
                }
            });
            $(document).bind("user_cookie_consent_changed", function(event, object) {
                console.log("User cookie consent changed: " + $(object).attr('consent'));
            });
        }(jQuery));
    }, 1000); 
});