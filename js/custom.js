// Custom Script -----------------------------------------
var customScripts = {
    onePageNav: function () {

        $('#mainNav').onePageNav({        
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                //I get fired when the animation is ending
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
            }
        });
    },
    init: function () {
        customScripts.onePageNav();
    }
}
$('document').ready(function () {
    customScripts.init();
});
//--------------------------------------------------

// Loader---------------------------------
$(window).on("load", function() {
    $('.loader-wrapper').fadeOut("slow");
});
//------------------------------------------


// slider ------------------------------
$(document).ready(function(){

    $(".home-carousel").owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });


    // product slider-------------------------- 
    $(".custom-carousel").owlCarousel({
        autoWidth: true,
        lazyLoad: true
    });
    $(document).ready(function () {
        $(".custom-carousel .item").click(function () {
        $(".custom-carousel .item").not($(this)).removeClass("active");
        $(this).toggleClass("active");
        });
    });
    //---------------------------------
});
//---------------------------------------------

// pop up------------------------------------
function openPopup(pop) {
    $('.jsPopupAction').hide();
    $('.' + pop).fadeIn(200);  
     $('.jsPopupOverlay, .jsPopupClose').fadeIn(200);
    
     // pop up slider
     $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        URLhashListener: true,
        startPosition: 'URLHash'
    })
}
$(document).mousedown(function (e){
     var container = $('.popup-content-container');
    if (!container.is(e.target)
        && container.has(e.target).length == 0) 
    {
         container.fadeOut(200);
         $('.jsPopupAction').fadeOut(200);
     }

     $(".fa-times-circle").click(function () {
        container.fadeOut(200);
        $('.jsPopupAction').fadeOut(200);
    });
});
// ------------------------------------------

// 百度地图API功能
$(document).ready(function(){
var fullmap = new BMapGL.Map('map-container');
fullmap.centerAndZoom(new BMapGL.Point(120.033317, 32.459391), 15);
fullmap.enableScrollWheelZoom(true);
// 创建添加点标记
var marker = new BMapGL.Marker(new BMapGL.Point(120.033317, 32.459391));
fullmap.addOverlay(marker);
// 创建图文信息窗口
var sContent = `<h4 style='margin:0 0 5px 0;'>江苏金冠炉业</h4>
    <img style='float:right;margin:0 4px 22px' id='imgDemo' src='images/img/home-intro2.png' width='200' height='104'/>
    <p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>
    江苏金冠炉业有限公司始建于1993年，是专业生产热处理用工业炉、电加热辐射管、加热丝、加热带、耐热钢精密铸造和离心铸造件、各种炉用锻件的企业。
    </p></div>`;
var infoWindow = new BMapGL.InfoWindow(sContent);
// marker添加点击事件
marker.addEventListener('click', function () {
    this.openInfoWindow(infoWindow);
    // 图片加载完毕重绘infoWindow
    document.getElementById('imgDemo').onload = function () {
        infoWindow.redraw(); // 防止在网速较慢时生成的信息框高度比图片总高度小，导致图片部分被隐藏
    };
});


});
