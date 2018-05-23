/**
 * Created by Thomas Macdonald on 25-09-2017.
 */

$(window).on("load", function () {
    $(".pre-loader").fadeOut();
});

//Selector variables
var $navigation = $('#navigationmenu');
var $navtop = $('#fixedtopmenu');
var slideupSelector = $('.slideup');
var slideupSelector2 = $('.slideup2');

//Document Ready function
$(document).ready(function () {


    $navigation.removeClass('d-flex');
    //$navigation.fadeOut();
    $navigation.hide();
    //$navigation.addClass('d-none');
});

//Onscroll function
$(window).scroll(function () {

    if ($(this).scrollTop() > 50) {
        $navtop.addClass('background-menu');
        $navtop.removeClass('background-menu-fadeback')
    }
    else {
        $navtop.addClass('background-menu-fadeback');
        $navtop.removeClass('background-menu');
    }
});


//Smooth scroll to anchor containing the class "smooth"
$('a').click(function () {
    if ($(this).hasClass('smooth')) {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 400);
        return false;
    }
});

var modalSelector = $('.modal');


var arr = new Array(12 * 4);
var t = 0;
for (i = 0; i < 12; i++) {
    for (j = 0; j < 4; j++) {
        arr[t] = i + "_" + j + ".jpg";
        t++;
    }
}

$('.reserve').click(function (e) {
    var id = $(this).parent().parent().attr('id');
    var idSelector = $('#' + id);

    var brand = idSelector.children('.brand').text().substring(5);
    var model = idSelector.children('.name').text().substring(5);
    var price = idSelector.children('.priceVisible').text().substring(5);
    var gender = idSelector.children('.gender').text().substring(6);
    var frame = idSelector.children('.frame').text().substring(10);
    var madeby = idSelector.children('.madeby').text();
    var madebyImg = idSelector.children('.madeby-img').text();


    $('#headline').replaceWith('<h1 class="text-center" id="headline">' + brand + model + '</h1>');

    $('#img1').replaceWith('<img src="img/webshop/' + arr[(id - 1) * 4] + '"  class="rounded-corners full-width modal-img" alt="bikePic1" id="img1">');
    $('#img2').replaceWith('<img src="img/webshop/' + arr[(id - 1) * 4 + 1] + '" class="rounded-corners full-width modal-img" alt="bikePic2" id="img2">');
    $('#img3').replaceWith('<img src="img/webshop/' + arr[(id - 1) * 4 + 2] + '" class="rounded-corners full-width modal-img" alt="bikePic2" id="img3">');
    $('#img4').replaceWith('<img src="img/webshop/' + arr[(id - 1) * 4 + 3] + '" class="rounded-corners full-width modal-img" alt="bikePic2" id="img4">');

    $('#brand').replaceWith('<h2 id="brand" class="brand type-class">BRAND<span class="type-name">' + brand + '</span></h2>');
    $('#model').replaceWith('<h2 id="model" class="name type-class">MODEL: <span class="type-name">' + model + '</span></h2>');
    $('#price').replaceWith('<h2 id="price" class="type-class">PRICE <span class="type-name">' + price + '</span></h2>');
    $('#gender').replaceWith('<h2 class="type-class" id="gender">GENDER <span class="type-name">' + gender + '</span></h2>');
    $('#frame').replaceWith('<h2 class="type-class" id="frame">FRAME SIZE <span class="type-name">' + frame + '</span></h2>');

    $('#madeby').replaceWith('<p class="text-center" id="madeby">This bike was reincarnated with love by <span class="text-bold">' + madeby + '</span></p>');
    $('#madebyImg').replaceWith('<img src="img/profiles/' + madebyImg + '" alt="mekaniker" id="madebyImg" class="image-half d-block mx-auto round-img">');

    e.preventDefault();
    $('.modal').css('display', 'block');

    $('.modal-img').click(function () {
        var smallImage = this;
        var src = this.src;
        $('#large-img img').fadeOut(400, function () {
            smallImage.src = this.src;
            $(this).fadeIn(400)[0].src = src;
        });
    });
});


$('.modalPop').click(function (e) {
    e.preventDefault();
    $('.modal').css('display', 'block');
});

$('.modalPopSecondary').click(function (e) {
    e.preventDefault();
    $('.modalSecondary').css('display', 'block');
});

var blogContentSelector = $('.blog-content');

var blogContentArr = new Array(3);
var blogContentImg = new Array(3);

blogContentArr[0] = '<br/><hr class="divider"><br/><br/><h2 class="width-75 d-block mx-auto"><span class="small-red-underline">Wh</span>en hard demands are met with a smile</h2><br/><p class="width-75 d-block mx-auto"> We love to receive fun tasks and when the task is really important to the customers everyday life, we are stoked and want to tell the good story. Like in this instance.</p><p class="width-75 d-block mx-auto">One day a couple of months ago a woman enters the shop and asks for a bike for her and her family. Her husband is blind and thus far the pair have been riding a tandem with a child seat attached.</p><p class="width-75 d-block mx-auto">Now she is pregnant with their second child and need a more practical solution. A cargo bike sounds ideal but the problem is that her husband cannot ride it at the same time. They search for the right solution and people willing to accept the task but are turned down.</p><p class="width-75 d-block mx-auto">One day the woman swings by our shop to seek help since she has heard that we handle the harder and more atypical jobs. Our workshop manager wants to accept the challenge and begins welding. He uses the front end of a Nihola cargo bike since it curves less when turning - and with a blind secondary rider it is important that it is as stabile as possible.</p><p class="width-75 d-block mx-auto">The front of their old tandem bike is cut off and the new front end attached. After a lot of sweat and tears at the workshop the bike is finally finished and now ready for the family to ride in unison.</p><p class="width-75 d-block mx-auto">A cool little detail on the bike is that the tail light is a signal light which can be controlled from the handlebars. We wish them good fortune with their new bike!</p><br/><br/>';
blogContentArr[1] = '<br/><hr class="divider"><br/><br/><h2 class="width-75 d-block mx-auto"><span class="small-red-underline">Om</span>niuim vs. Slumnium</h2><br/><p class="width-75 d-block mx-auto">Yesterday evening Buddha Bikes were on TV again, in the DR1 program "Fra yt til nyt". We repair an Omnium cargo bike with welding, and we build a cargo bike from the frame and used parts - and  in a more classic style than what you normally find Omniums cargo bikes. It has quite a bit of patina and we have taken to calling it Slumnium.</p>  <p class="width-75 d-block mx-auto">Used cargo bikes are really hard to track down for cheap so it is lovely that we now have one for sale. We do not want to sell new bikes because we belive that there are plenty of new bikes being produced - however with cargo bikes we make an exception since we so rarely have a chance to sell them used. Omnium have built a bike we can stand by so we are now the proud retailers of their products. And there is a difference between used and new - the picture might speak for itself.</p><p class="width-75 d-block mx-auto">Read more on <a href="http://www.omniumcargo.dk" class="link-inv" target="_blank">www.omniumcargo.dk</a></p><br/><br/>';
blogContentArr[2] = '<br /><hr class="divider"><br/><br/><h2 class="width-75 d-block mx-auto"><span class="small-red-underline">Bu</span>ddha Bikes wins bet over the Cyclist association</h2><br/><p class="width-75 d-block mx-auto">When the campaign "We bike to work" was laucnched the 1st of May, se sent an open letter to the Cyclist association, where we challenged them on their own court. We suggested a bet regarding, which workplace could bike the furthest pr. coworker during the period of the campaign.</p><p class="width-75 d-block mx-auto">Now the bet has been determined and Team Buddha Bikes and Cykelven crosses the goalline with 278.45 km pr. co-worker during the month of may. We are very pleased with this result for several reasons.</p><p class="width-75 d-block mx-auto">That means that there will be full catering fo us when all four teams (the Cyclist association had three) meet later this summer. We are hoping for a hot grill and cold Kings! Secondly, it means that our house artist will create a trophy for the occasion which will proudly be displayed at the workshop - engravings and all.</p><p class="width-75 d-block mx-auto">In the name of good sportsmanship it should be mentioned that the Cyclist association would have had us beat if we had not set our own rules. But as you say "If you cannot join them, beat them - by making your own rules!".</p><p class="width-75 d-block mx-auto">Thank you for the match! It has been a pleasure and it has created a lot of good moments already. We are looking forward to our joined picnic. Cheers and good summer!</p><br/><br/>';

blogContentImg[0] = '<img src="img/blogposts/blog1.png" alt="blogpost" class="full-width rounded-corners d-block mx-auto" id="blogimg">';
blogContentImg[1] = '<img src="img/blogposts/blog2.png" alt="blogpost" class="full-width rounded-corners d-block mx-auto" id="blogimg">';
blogContentImg[2] = '<img src="img/blogposts/blog3.png" alt="blogpost" class="full-width rounded-corners d-block mx-auto" id="blogimg">';

$('.blog').click(function (e) {
    e.preventDefault();
    var id = $(this).attr("id");
    $('#blogimg').replaceWith(blogContentImg[id - 1]);
    blogContentSelector.empty();
    blogContentSelector.append(blogContentArr[id - 1]);

});


$('.closemodal').click(function () {
    modalSelector.css('display', 'none')
});

$('#closemodalSecondary').click(function () {
    $('#modalnumerodos').css('display', 'none')
});


window.onclick = function (event) {

    if (event.target === document.getElementById('myModal')) {
        $('.modal').css('display', 'none');
    }
    if (event.target === document.getElementById('modalnumerodos')) {
        $('.modalSecondary').css('display', 'none');
    }
};

$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        $('.modal').css('display', 'none');
        $('.modalSecondary').css('display', 'none');
    }
});



$('.expandbutton').click(function (e) {

    e.preventDefault();
    if (slideupSelector.hasClass('itsup')) {
        $(slideupSelector.slideDown("slow", function () {
            slideupSelector.removeClass('itsup');

        }))
    } else {
        slideupSelector.slideUp("slow", function () {
            slideupSelector.addClass('itsup');
        })
    }
});


$('.expandbuttonAlt').click(function (event) {

    event.preventDefault();
    if (slideupSelector2.hasClass('itsup2')) {
        $(slideupSelector2.slideDown("slow", function () {
            slideupSelector2.removeClass('itsup2');
        }))
    } else {
        slideupSelector2.slideUp("slow", function () {
            slideupSelector2.addClass('itsup2');
        })
    }
});
