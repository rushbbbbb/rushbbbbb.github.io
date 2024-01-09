//弹窗样式
iziToast.settings({
    timeout: 10000,
    progressBar: false,
    close: false,
    closeOnEscape: true,
    position: 'topCenter',
    transitionIn: 'bounceInDown',
    transitionOut: 'flipOutX',
    displayMode: 'replace',
    layout: '1',
    backgroundColor: '#00000040',
    titleColor: '#efefef',
    messageColor: '#efefef',
    icon: 'Fontawesome',
    iconColor: '#efefef',
});
var JJLIN = [
    "BV1x341147Su",
    "BV1wT4y1d7wq",
    "BV1af4y1c7H4",
    "BV1Qq4y1P74j",
    "BV1ZT4y1Z72y",
    "BV1sh411H75M",
    "BV1WU4y1A7dM",
    "BV1fq4y1A75W",
    "BV1A34y1D7T9",
    "BV1i34y197yC",
    "BV1nF411T7zM",
    "BV1JL4y1e7Ss",
    "BV17v411E7sA",
    "BV1My4y1V7cG",
    "BV1qb4y167JS",
    "BV1iv411K7qC",
    "BV1D8411W7E3",
    "BV1we4y1q7Tw",
    "BV1D3411G7pf",
    "BV1uA4y1D7be",
    "BV1uA4y1D7be",
    "BV1T44y1N7Zc",
    "BV18Z4y1B7RE",
    "BV16a411h7V8",
    "BV16g41157B6",
    "BV1cv411T7Zb",
    "BV16o4y1Q7es",
    "BV1Yf4y157nw",
    "BV19X4y1w7Hn",
    "BV1wb4y1y723",
    "BV1UU4y1K7rA",
    "BV1S34y1B7NW",
    "BV1pa411B7Pj",
    "BV1gL411F7vS"
];
//加载完成后执行
window.addEventListener('load', function () {
    //载入动画
    $('#loading-box').attr('class', 'loaded');
    $('#bg').css("cssText", "transform: scale(1);filter: blur(0px);transition: ease 1.5s;");
    $('.cover').css("cssText", "opacity: 1;transition: ease 1.5s;");
    $('#section').css("cssText", "transform: scale(1) !important;opacity: 1 !important;filter: blur(0px) !important");
    var child = JJLIN[Math.floor(Math.random()*(JJLIN.length))];
    var Obj = $("<iframe class = 'music' src='https://player.bilibili.com/player.html?bvid=" +child+"&danmaku=0&t=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true' ></iframe>");
    $(".vedio").empty();
    $(".vedio").append(Obj);

    //用户欢迎
    setTimeout(function () {
        iziToast.show({
            timeout: 2500,
            icon: false,
            message: '欢迎来到我的主页'
        });
    }, 800);

}, false)

setTimeout(function () {
    $('#loading-text').html("字体及文件加载可能需要一定时间")
}, 3000);
//获取一言
fetch('https://v1.hitokoto.cn?max_length=24')
    .then(response => response.json())
    .then(data => {
        $('#hitokoto_text').html(data.hitokoto)
        $('#from_text').html(data.from)
    })
    .catch(console.error)

let times = 0;
$('#hitokoto').click(function () {
    if (times == 0) {
        times = 1;
        let index = setInterval(function () {
            times--;
            if (times == 0) {
                clearInterval(index);
            }
        }, 1000);
        fetch('https://v1.hitokoto.cn?max_length=24')
            .then(response => response.json())
            .then(data => {
                $('#hitokoto_text').html(data.hitokoto)
                $('#from_text').html(data.from)
            })
            .catch(console.error)
    } else {
        iziToast.show({
            timeout: 1000,
            icon: "fa-solid fa-circle-exclamation",
            message: '你点太快了吧'
        });
    }
});

$(".des").mouseover(function(){
    if (times == 0) {
        times = 1;
        let index = setInterval(function () {
            times--;
            if (times == 0) {
                clearInterval(index);
            }
        }, 2000);
        iziToast.show({
            timeout: 1000,
            icon:   "fa-regular fa-face-flushed " ,
            message: '被你发现啦'
        });
    }
});

//链接提示文字
{
    $("#social").mouseover(function () {
    $("#social").css({
        "background": "rgb(0 0 0 / 25%)",
        'border-radius': '6px',
        "backdrop-filter": "blur(5px)"
    });
    $("#link-text").css({
        "display": "block",
    });
    }).mouseout(function () {
    $("#social").css({
        "background": "none",
        "border-radius": "6px",
        "backdrop-filter": "none"
    });
    $("#link-text").css({
        "display": "none"
    });
    });

    $("#github").mouseover(function () {
    $("#link-text").html("去 Github 看看");
    }).mouseout(function () {
    $("#link-text").html("通过这里联系我");
    });
    $("#qq").mouseover(function () {
    $("#link-text").html("OS作业");
    }).mouseout(function () {
    $("#link-text").html("通过这里联系我");
    });
    $("#email").mouseover(function () {
    $("#link-text").html("来封 Email");
    }).mouseout(function () {
    $("#link-text").html("通过这里联系我");
    });
    $("#bilibili").mouseover(function () {
    $("#link-text").html("来 B 站看看 ~");
    }).mouseout(function () {
    $("#link-text").html("通过这里联系我");
    });
}


//更多弹窗页面
$('#openmore').on('click', function () {
    $('#box').css("display", "block");
    $('#row').css("display", "none");
    $('#more').css("cssText", "display:none !important");
});
$('#closemore').on('click', function () {
    $('#box').css("display", "none");
    $('#row').css("display", "flex");
    $('#more').css("display", "flex");
});



$(".line").on('click', function() {
    var child = JJLIN[Math.floor(Math.random()*(JJLIN.length))];
    var Obj = $("<iframe class = 'music' src='https://player.bilibili.com/player.html?bvid=" +child+"&danmaku=0&t=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true' ></iframe>");
    $(".vedio").empty();
    $(".vedio").append(Obj);
})
