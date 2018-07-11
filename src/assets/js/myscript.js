/*function submotOptinEmail(){
    console.log('submotOptinEmail');
    validateemail('career-email');
    //$("#career_form").removeAttr('onsubmit');
    //$("#career_form").submit();
}

function cancelOptinEmail(){
    console.log('cancelOptinEmail');
    var btn_data_id = $("#pvcy-btn").data('id');
    if(btn_data_id == 'contact-email'){
        location.href = "https://" + document.domain + "/contact-us/thank-you/";
    }else if(btn_data_id == 'collatral-email'){
        location.reload();
    }else if(btn_data_id == 'webinar-email'){
        location.reload();
    }else if(btn_data_id == 'career-email'){
        $("#career_form").removeAttr('onsubmit');
        $("#career_form").submit();
    }
}*/

$(document).ready(function() {
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
    });
});
$(document).ready(function(e) {
    $('#vertical-carousel').carousel({
        interval: 4000
    });
});
$(document).ready(function() {
    $('.fancybox').fancybox();
    $(".container .image-center img").on("click", function() {
        if ($(window).width() < 1025) {
            $("html, body").animate({
                scrollTop: 0
            }, 0);
        }
    });
});
$(document).ready(function() {
    $(".master-link a").click(function() {
        $('html, body').animate({
            scrollTop: $("#myDiv").offset().top - 90
        }, 2000);
    });
});
$(document).ready(function() {
    $('.fancybox').fancybox();
    $(".fancybox").on("click", function() {
        if ($(window).width() < 1025) {
            $("html, body").animate({
                scrollTop: 0
            }, 0);
        }
    });
});
jQuery(document).ready(function() {
    $('.container .image-center img').fancybox();
});
$(document).ready(function(e) {
    $('.carousel').carousel({
        interval: 3000
    });
});
$(document).ready(function() {
    try {
        (function() {
            $('#toc').toc();
        })();
        $('.-accordion').asAccordion({
            namespace: '-accordion'
        });
    } catch (err) {
        console.log(err.message);
    }
});
$(document).ready(function() {
    try {
        $('.lang_sel_sel img')[0].nextSibling.remove();
    } catch (err) {
        console.log(err.message);
    }
});
$('.menu-navigation-home .navbar-menu li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
$(".drop-submenu").on('click', function() {
    $(".dropsubmenu").show(function() {
        $(".mobilemenu").on('click', function() {
            $(".mobile-menu").show();
        });
    });
});
$(document).ready(function() {
    $("#flip-search").click(function() {
        $("#panel-search").slideToggle("slow");
    });
    $(document).click(function(e) {
        if (!$(e.target).closest('#flip-search, #panel-search').length) {
            $('#panel-search').stop(true).slideUp();
        }
    });
});
$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
    $(document).click(function(e) {
        if (!$(e.target).closest('#flip, #panel').length) {
            $('#panel').stop(true).slideUp();
        }
    });
    $('.responsive-tabs').responsiveTabs({
        accordionOn: ['xs', 'sm']
    });
});
$(".resources-link").click(function() {
    $('html,body').animate({
        scrollTop: $(".collateral-tab-link").offset().top - 100
    }, 'slow');
});

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode == 46) return false;
    else if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
}

function trimspaces(el) {
    el.value = el.value.replace(/(^\s*)|(\s*$)/gi, "").replace(/[ ]{2,}/gi, " ").replace(/\n +/, "\n");
    return;
}

/*$("#form_0002_ao_submit_input").click(function(){
    validateform();
});*/

$(document).on('click','#form_0002_ao_submit_input',function(){
    validateform();
});

/*$(document).on('click','#pvcy-btn',function(){
    var btn_data_id = $("#pvcy-btn").data('id');
    validateemail(btn_data_id);
});

$(document).on('click','#privacy-close-btn',function(){
    var btn_data_id = $("#pvcy-btn").data('id');
    if(btn_data_id == 'contact-email'){
        //location.href = "https://" + document.domain + "/contact-us/thank-you/";
        var url = window.location.href;
        var thankyouurl = url+'?thank-you';
        window.location.href = thankyouurl;
    }else if(btn_data_id == 'collatral-email'){
        //location.reload();
        var url = window.location.href;
        var thankyouurl = url+'?thank-you';
        window.location.href = thankyouurl;
    }else if(btn_data_id == 'webinar-email'){
        //location.reload();
        var url = window.location.href;
        var thankyouurl = url+'?thank-you';
        window.location.href = thankyouurl;
    }else if(btn_data_id == 'career-email'){
        $("#career_form").removeAttr('onsubmit');
        $("#career_form").submit();
    }
});

function validateemail(btn_data_id){
    var email = document.getElementById('pvcy-email');
    var emailLegalReg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!rediffmail.com)(?!yahoo.co.in)(?!aol.com)([\w-]+\.)+[\w-]{2,11})?$/;
    var emailLegalReg = /^([a-zA-Z0-9_\.\-])+\@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!rediffmail.com)(?!yahoo.co.in)(?!aol.com)(?!easy.com)(?!mail.com)(?!gmx.com)(?!yandex.com)(?!rocketmail.com)(?!zoho.com)(?!ymail.com)(?!one.com)(?!inbox.com)(?!muchomail.com)(?!mail2world.com)(?!33mail.com)(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.value == null || email.value == "" || email.value == "* EMAIL") {
        alert("Please Enter your Email-Id");
        email.focus();
        return false;
    } else if (!filter.test(email.value.toLowerCase())) {
        alert("Please Enter Valid Email-Id");
        email.focus();
        return false;
    } else {}
    var emailLegalReg = /^([a-zA-Z0-9_\.\-])+\@(?!gmail.com)(?!yahoo.com)(?!live.com)(?!hotmail.com)(?!rediffmail.com)(?!yahoo.co.in)(?!aol.com)(?!easy.com)(?!mail.com)(?!gmx.com)(?!yandex.com)(?!rocketmail.com)(?!zoho.com)(?!ymail.com)(?!one.com)(?!inbox.com)(?!muchomail.com)(?!mail2world.com)(?!33mail.com)(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!emailLegalReg.test(email.value.toLowerCase())) {
        email.focus();
        alert("Please Enter your Corporate E-Mail id");
        return false;
    }
    if (email.value.length > 50) {
        alert("Chracters Litimited to 50");
        email.focus();
        return false;
    }

    $.ajax({
        type: 'POST',
        url: "https://" + document.domain + "/wp-content/themes/hexaware-main/act-on/phpcurl-privacy-email.php",
        data: {
            EMailAddress: email.value
        },
        success: function(response) {
            if (response == '1') {
                $('#myModal').modal('hide'); 
                if(btn_data_id == 'contact-email'){
                    //location.href = "https://" + document.domain + "/contact-us/thank-you/";
                    var url = window.location.href;
                    var thankyouurl = url+'?thank-you';
                    window.location.href = thankyouurl;
                }else if(btn_data_id == 'collatral-email'){
                    //location.reload();
                    var url = window.location.href;
                    var thankyouurl = url+'?thank-you';
                    window.location.href = thankyouurl;
                }else if(btn_data_id == 'webinar-email'){
                    //location.reload();
                    var url = window.location.href;
                    var thankyouurl = url+'?thank-you';
                    window.location.href = thankyouurl;
                }else if(btn_data_id == 'career-email'){
                    $("#career_form").removeAttr('onsubmit');
                    $("#career_form").submit();
                }
            }
        }
    });
    return false;
}*/

/* var setUserAcceptsCookies = function(consent) {
    var d = new Date();
    var expiresInDays = 300000 * 24 * 60 * 60 * 1000;
    d.setTime(d.getTime() + expiresInDays);
    var expires = "expires=" + d.toGMTString();
    document.cookie = 'EU_COOKIE_LAW_CONSENT' + '=' + consent + "; " + expires + ";path=/";
    $(document).trigger("user_cookie_consent_changed", {
        'consent': consent
    });
};
var hideContainer = function() {
    $('.eupopup-container').animate({
        opacity: 0,
        height: 0
    }, 200, function() {
        $('.eupopup-container').hide(0);
    });
};*/

function validateform() {    
    var name = document.getElementById('form_0001_fld_1');
    var email = document.getElementById('form_0002_fld_3');
    var captcha = document.getElementById('g-recaptcha-response');
    var fname = document.getElementById('form_0001_fld_1');
    var lname = document.getElementById('form_0002_fld_1');
    var jobtitle = document.getElementById('form_0002_fld_2');
    var phone = document.getElementById('form_0002_fld_4');
    var company = document.getElementById('form_0002_fld_5');
    var country = document.getElementById('form_0002_fld_6');
    var message = document.getElementById('form_0002_fld_7');
    //var GDPRPolicy = document.getElementById('GDPRPolicy');
    var emailLegalReg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!rediffmail.com)(?!yahoo.co.in)(?!aol.com)([\w-]+\.)+[\w-]{2,11})?$/;
    var emailLegalReg = /^([a-zA-Z0-9_\.\-])+\@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!rediffmail.com)(?!yahoo.co.in)(?!aol.com)(?!easy.com)(?!mail.com)(?!gmx.com)(?!yandex.com)(?!rocketmail.com)(?!zoho.com)(?!ymail.com)(?!one.com)(?!inbox.com)(?!muchomail.com)(?!mail2world.com)(?!33mail.com)(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ((jQuery.trim(fname.value)).length == 0 || fname.value == null || fname.value == "" || fname.value == "* NAME") {
        alert("Please Enter your First Name");
        fname.focus();
        return false;
    } else if (!fname.value.match(/^[a-zA-Z ]+$/)) {
        alert("Please enter your first name using alphabets only");
        fname.focus();
        return false;
    }
    if ($('#GDPRPolicy').is(":checked")) {
        GDPRPolicy = 'Privacy Policy';
    } else {
        GDPRPolicy = '';
    }
    if ((jQuery.trim(lname.value)).length == 0 || lname.value == null || lname.value == "" || lname.value == "* NAME") {
        alert("Please Enter your Last Name");
        lname.focus();
        return false;
    } else if (!lname.value.match(/^[a-zA-Z ]+$/)) {
        alert("Please enter your Last Name using alphabets only");
        lname.focus();
        return false;
    }
    if ((jQuery.trim(jobtitle.value)).length == 0 || jobtitle.value == null || jobtitle.value == "" || jobtitle.value == "* NAME") {
        alert("Please Enter your Job Title");
        jobtitle.focus();
        return false;
    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.value == null || email.value == "" || email.value == "* EMAIL") {
        alert("Please Enter your Email-Id");
        email.focus();
        return false;
    } else if (!filter.test(email.value.toLowerCase())) {
        alert("Please Enter Valid Email-Id");
        email.focus();
        return false;
    } else {}
    var emailLegalReg = /^([a-zA-Z0-9_\.\-])+\@(?!gmail.com)(?!yahoo.com)(?!live.com)(?!hotmail.com)(?!rediffmail.com)(?!yahoo.co.in)(?!aol.com)(?!easy.com)(?!mail.com)(?!gmx.com)(?!yandex.com)(?!rocketmail.com)(?!zoho.com)(?!ymail.com)(?!one.com)(?!inbox.com)(?!muchomail.com)(?!mail2world.com)(?!33mail.com)(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!emailLegalReg.test(email.value.toLowerCase())) {
        email.focus();
        alert("Please Enter your Corporate E-Mail id");
        return false;
    }
    if (email.value.length > 50) {
        alert("Chracters Litimited to 50");
        email.focus();
        return false;
    }
    if (phone.value == null || phone.value == "" || phone.value == "* EMAIL") {
        alert("Please Enter your Phone Number");
        phone.focus();
        return false;
    }
    if (phone.value.length < 4) {
        alert("Phone Number should have atleast 4 digits");
        phone.focus();
        return false;
    }
    if (company.value == null || company.value == "" || company.value == "") {
        alert("Please Enter your Company Name");
        company.focus();
        return false;
    }
    if (country.value == null || country.value == "" || country.value == "") {
        alert("Please Select Country");
        country.focus();
        return false;
    }
    if (captcha.value == null || captcha.value == "") {
        alert("Please Enter Captcha");
        return false;
    } else {
        $.ajax({
            type: 'POST',
            url: "https://" + document.domain + "/wp-content/themes/hexaware-main/act-on/phpcurl-contact-us.php",
            data: {
                FirstName: fname.value,
                GDPRPolicy: GDPRPolicy,
                LastName: lname.value,
                JobTitle: jobtitle.value,
                EMailAddress: email.value,
                BusinessPhone: phone.value,
                Company: company.value,
                Country: country.value,
                Description: message.value,
                catcha: captcha.value
            },
            success: function(response) {
                if (response == "1") {
                    /*if(GDPRPolicy == 'Privacy Policy'){
                        $('#myModal').modal('show');
                        $('#pvcy-email').val(email.value);
                        $("#myModal").css("z-index","999999999");
                        $("body").css("overflow","hidden");
                        $("#pvcy-btn").attr('data-id','contact-email');
                        $(document).keyup(function(e) {
                             if (e.keyCode == 27) {
                                var btn_data_id = $("#pvcy-btn").data('id');
                                if(btn_data_id == 'contact-email'){
                                    //location.href = "https://" + document.domain + "/contact-us/thank-you/";
                                    var url = window.location.href;
                                    var thankyouurl = url+'?thank-you';
                                    window.location.href = thankyouurl;
                                }else if(btn_data_id == 'collatral-email'){
                                    //location.reload();
                                    var url = window.location.href;
                                    var thankyouurl = url+'?thank-you';
                                    window.location.href = thankyouurl;
                                }else if(btn_data_id == 'webinar-email'){
                                    //location.reload();
                                    var url = window.location.href;
                                    var thankyouurl = url+'?thank-you';
                                    window.location.href = thankyouurl;
                                }else if(btn_data_id == 'career-email'){
                                    $("#career_form").removeAttr('onsubmit');
                                    $("#career_form").submit();
                                }
                            }
                        });
                    }else{                        
                        //location.href = "https://" + document.domain + "/contact-us/thank-you/";
                        var url = window.location.href;
                        var thankyouurl = url+'?thank-you';
                        window.location.href = thankyouurl;
                    }*/
                    location.href = "https://" + document.domain + "/contact-us/thank-you/";
                } else {
                    alert("Error Occured");
                    return false;
                }
            }
        });
        return false;
    }
}

function validatecareerform() {
    if ($('#GDPRPolicy').is(":checked")) {
        GDPRPolicy = 'Privacy Policy';
    } else {
        GDPRPolicy = '';
    }
    var joboption = document.getElementById('form_0001_fld_0');
    var name = document.getElementById('form_0001_fld_1');
    var dob = document.getElementById('datepicker');
    var address = document.getElementById('form_0001_fld_3');
    var city = document.getElementById('form_0001_fld_4');
    var state = document.getElementById('form_0001_fld_5');
    var zipcode = document.getElementById('form_0001_fld_6');
    var country = document.getElementById('form_0001_fld_7');
    var phone = document.getElementById('form_0001_fld_8');
    var email = document.getElementById('form_0002_fld_3');
    var highesteducationqualification = document.getElementById('form_0001_fld_10');
    var highestqualification = document.getElementById('form_0001_fld_11');
    var resume = document.getElementById('form_0001_fld_13');
    var captcha = document.getElementById('g-recaptcha-response');
    var jobLocation = document.getElementById('JOBLocation');
    var emailLegalReg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!rediffmail.com)(?!yahoo.co.in)(?!aol.com)([\w-]+\.)+[\w-]{2,11})?$/;
    var emailLegalReg = /^([a-zA-Z0-9_\.\-])+\@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!rediffmail.com)(?!yahoo.co.in)(?!aol.com)(?!easy.com)(?!mail.com)(?!gmx.com)(?!yandex.com)(?!rocketmail.com)(?!zoho.com)(?!ymail.com)(?!one.com)(?!inbox.com)(?!muchomail.com)(?!mail2world.com)(?!33mail.com)(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ((jQuery.trim(joboption.value)).length == 0 || joboption.value == null || joboption.value == "") {
        alert("Please Select the Job applying for");
        joboption.focus();
        return false;
    }
    if ((jQuery.trim(name.value)).length == 0 || name.value == null || name.value == "") {
        alert("Please Enter Name");
        name.focus();
        return false;
    } else if (!name.value.match(/^[a-zA-Z ]+$/)) {
        alert("Please enter your Name using alphabets only");
        name.focus();
        return false;
    }
    if ((jQuery.trim(dob.value)).length == 0 || dob.value == null || dob.value == "") {
        alert("Please Enter Date of Birth");
        dob.focus();
        return false;
    }
    if ((jQuery.trim(address.value)).length == 0 || address.value == null || address.value == "") {
        alert("Please Enter Address");
        address.focus();
        return false;
    }
    if ((jQuery.trim(city.value)).length == 0 || city.value == null || city.value == "") {
        alert("Please Enter City");
        city.focus();
        return false;
    }
    if ((jQuery.trim(state.value)).length == 0 || state.value == null || state.value == "") {
        alert("Please Enter State");
        state.focus();
        return false;
    }
    if ((jQuery.trim(zipcode.value)).length == 0 || zipcode.value == null || zipcode.value == "") {
        alert("Please Enter Zipcode");
        zipcode.focus();
        return false;
    }
    if ((jQuery.trim(country.value)).length == 0 || country.value == null || country.value == "") {
        alert("Please Select Country");
        country.focus();
        return false;
    }
    if ((jQuery.trim(jobLocation.value)).length == 0 || jobLocation.value == null || jobLocation.value == "") {
        alert("Please Select Preferred Job Location");
        jobLocation.focus();
        return false;
    }
    if ((jQuery.trim(phone.value)).length == 0 || phone.value == null || phone.value == "") {
        alert("Please Enter Phone Number");
        phone.focus();
        return false;
    }
    if (phone.value.length < 4) {
        alert("Phone Number should have atleast 4 digits");
        phone.focus();
        return false;
    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.value == null || email.value == "" || email.value == "* EMAIL") {
        alert("Please Enter your Email-Id");
        email.focus();
        return false;
    } else if (!filter.test(email.value.toLowerCase())) {
        alert("Please Enter Valid Email-Id");
        email.focus();
        return false;
    } else {}
    if (email.value.length > 50) {
        alert("Chracters Litimited to 50");
        email.focus();
        return false;
    }
    if (highesteducationqualification.value == null || highesteducationqualification.value == "") {
        alert("Please Select Highest Education Qualification");
        highesteducationqualification.focus();
        return false;
    }
    if (highestqualification.value == null || highestqualification.value == "") {
        alert("Please Enter Highest Qualification");
        highestqualification.focus();
        return false;
    }
    if (resume.value == null || resume.value == "") {
        alert("Please Upload Resume");
        resume.focus();
        return false;
    }
    if (captcha.value == null || captcha.value == "") {
        alert("Please Enter Captcha");
        return false;
    } else {        
        /*if(GDPRPolicy == 'Privacy Policy'){
            $('#myModal').modal('show');
            $('#pvcy-email').val(email.value);
            $("#myModal").css("z-index","999999999");
            $("body").css("overflow","hidden");
            $("#pvcy-btn").attr('data-id','career-email');
            $(document).keyup(function(e) {
                 if (e.keyCode == 27) {
                    var btn_data_id = $("#pvcy-btn").data('id');
                    if(btn_data_id == 'contact-email'){
                        //location.href = "https://" + document.domain + "/contact-us/thank-you/";
                        var url = window.location.href;
                        var thankyouurl = url+'?thank-you';
                        window.location.href = thankyouurl;
                    }else if(btn_data_id == 'collatral-email'){
                        //location.reload();
                        var url = window.location.href;
                        var thankyouurl = url+'?thank-you';
                        window.location.href = thankyouurl;
                    }else if(btn_data_id == 'webinar-email'){
                        //location.reload();
                        var url = window.location.href;
                        var thankyouurl = url+'?thank-you';
                        window.location.href = thankyouurl;
                    }else if(btn_data_id == 'career-email'){
                        $("#career_form").removeAttr('onsubmit');
                        $("#career_form").submit();
                    }
                }
            });
            return false;
        }else{ 
            return true;
        }*/
        return true;
    }
}
$(document).ready(function(e) {
    $('#form_0002_fld_4').keydown(function(e) {
        if (e.which == 37 || e.which == 38 || e.which == 39 || e.which == 40) {
            e.preventDefault();
            return false;
        }
    });
});
equalheight = function(VideoText) {
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el, topPosition = 0;
    $(VideoText).each(function() {
        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;
        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0;
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}
$(window).load(function() {
    equalheight('.box-layouts');
});
$(window).resize(function() {
    equalheight('.box-layouts');
});
$(window).load(function() {
    equalheight('.hw-box-job h1');
});
$(window).resize(function() {
    equalheight('.hw-box-job h1');
});
$(window).load(function() {
    equalheight('.hw-box-job');
});
$(window).resize(function() {
    equalheight('.hw-box-job');
});
$(window).load(function() {
    equalheight('.hw-box-job .hw-work-location');
});
$(window).resize(function() {
    equalheight('.hw-box-job .hw-work-location');
});
$(window).load(function() {
    equalheight('.hw-box-job .hw-date');
});
$(window).resize(function() {
    equalheight('.hw-box-job .hw-date');
});
$(window).load(function() {
    equalheight('.agile-banner-section .partners-slider div.slick-slide a');
});
$(window).resize(function() {
    equalheight('.agile-banner-section .partners-slider div.slick-slide a');
});