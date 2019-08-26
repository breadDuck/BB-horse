window.onload = function () {
    //顶部按键的无聊设置
    var btns=$('header_left').children[0].children;
    for (i=1;i<btns.length;i++){
        btns[i].onclick=function () {
            alert('老铁，别点这个，试试别的');
            return false;
        }
    }
    //美图 漫画 番剧选项卡切换效果
    var tabTitleLis = $('tab_title').children[0].children;
    var tabContLis = $('tab_content').children[0].children;
    for (var i = 0; i < tabTitleLis.length; i++) {
        var lastOne = 0;
        (function (i) {
            tabTitleLis[i].onclick = function () {
                tabTitleLis[lastOne].className = '';
                tabContLis[lastOne].style.display = 'none';
                this.className = 'selected';
                tabContLis[i].style.display = 'block';
                lastOne = i;
                //漫画内容瀑布流
                if (i===1){
                    setTimeout(function () {
                        waterFall('manga');
                    },50);
                }
            }
        })(i)
    }
    //设置美图的内容(背景图)
    var pics = $('tab_content').children[0].children[0].children;
    for (var i = 0; i < pics.length; i++) {
        pics[i].style.background = 'url("p' + (i + 1) + '.jpg") no-repeat';
        pics[i].style.backgroundSize = '100% 100%';
    }
    //设置漫画的内容
    var json = [
        {
            pic: 'm1.jpg',
            txt: '故事的舞台又再次回到了王都卢克尼卡，这一次等待着昂的挑战会是什么？超人气作品《Re:从零开始的异世界生活 第三章 Truth of Zero连载开始！',
            href: 'https://manhua.dmzj.com/reconglingkaishideyishijieshenghuodisanzhang/'
        },
        {
            pic: 'm2.jpg',
            txt: '延续《崩坏学园2》主线剧情,崩坏学园系列漫画最新作！ 敌人不再只是死士，那拥有压倒性力量的巨大身影究竟是.....?',
            href: 'https://www.dmzj.com/info/benghuai3rd.html'
        },
        {
            pic: 'm3.jpg',
            txt: '最强大总统在异世界的骑乘(?)之旅',
            href: 'https://manhua.dmzj.com/qichengzhiwang/'
        },
        {
            pic: 'm4.jpg',
            txt: '主人公埼玉原本是一名整日奔波于求职的普通人。3年前的一天偶然遇到了要对淘气少年下杀手的异变螃蟹人后，回忆起年少年时“想要成为英雄”的梦想，最终拼尽全力救下了淘气少年。之后通过拼命锻炼，埼玉终于脱胎换骨获得了最强的力量，但同时失去了头发成了光头。',
            href: 'https://www.mkzhan.com/209893'
        },
        {
            pic: 'm5.jpg',
            txt:'魔法师协会分布在全世界各地，那里是魔法师介绍工作和传达情报的场所。梦想成为一名独挡一面魔法师的少女露茜，遇上了能吃火，用火攻击，操纵灭火龙法的魔法师',
            href:'https://manhua.dmzj.com/yaojingdeweiba/'
        },
        {
            pic: 'm6.jpg',
            txt:'松坂砂糖有了喜欢的人。 和那位喜欢的人在一起就会产生甜蜜的感情。 这一定就是爱吧。她这么想着。 为了守护这份感情，无论什么事也可以被原谅。 就算欺骗、侵犯、夺取、玩坏也没有关系。 ‘カミヨメ’‘TARI TARI’的作者键空とみやき所描绘的，战栗的纯爱恐怖作。',
            href:'https://manhua.dmzj.com/happysugarlife/'
        },
        {
            pic:'m7.jpg',
            txt:'那句话与真正的意义，现在我还并不知道，无论何时我都是无比害怕去知晓。新作者仲谷鳰，持满以待，堂堂连载出道',
            href:'https://manhua.dmzj.com/zuizhongwochengleni/'
        },
        {
            pic:'m8.jpg',
            txt:'JOJO奇妙冒险漫画又称作JOJO奇妙历险记漫画，一曲歌颂人类的赞歌 19世纪末的一个雨夜，英国贵族祖斯达从昏迷中醒来，误将正在偷窃其财物的达利欧·布朗度当成了救命恩人。12年后，为了报恩祖斯达收养了布朗度的儿子迪奥，并且将其和自己的儿子祖纳桑一起抚养长大。但迪奥野心勃勃，成年后他不思报恩反而处心积虑的密谋夺取乔斯达家族的所有财富。不想东窗事发，穷凶极恶的迪奥逐丧心病狂杀害恩人祖斯达，并使用邪恶的石鬼面具里的魔力变成了一… 每一个人物，都被赋予了真正的灵魂……',
            href:'https://manhua.dmzj.com/jojo/'
        },
        {
            pic:'m9.jpg',
            txt:'悠长的历史之中，人类曾一度因被巨人捕食而崩溃。幸存下来的人们建造了一面巨大的墙壁，防止了巨人的入侵。不过，作为「和平」的代价，人类失去了到墙壁的外面去这一「自由」……主人公艾伦·耶格尔对还没见过的外面的世界抱有兴趣。在他正做着到墙壁的外面去这个梦的时候，毁坏墙壁的大巨人出现了！',
            href:'https://manhua.fzdm.com/39/'
        },
        {
            pic:'m10.jpg',
            txt:'财富，权力，曾经拥有一切的海贼王戈尔多·罗杰，在临死前畱下暸一句话：“想要我的财富吗？那就去找吧，我的一切都在那裏，在那伟大的航道！”于是越来越多的人奔嚮大海，驶入伟大的航道，世界迎来暸大海贼时代！很多年后，一个小孩对这一个断暸手臂的海贼髮誓：“我一定要成为海贼王！”于是10年后，一个伟大的传说开始暸。这是个关于一群爱做梦孩子的故事，他们拥有热情，他们拥有毅力，他们拥有伙伴……',
            href:'https://manhua.fzdm.com/02/'
        }
    ]
    var manga = $('manga');
    var mangaInner = manga.innerHTML;
    var htmlStr;
    for (i=0;i<json.length;i++){
        htmlStr='<div class="seal-box">' +
            '<div class="manga-box">' +
            '<div class="pic">' +
            '<img src=' + json[i].pic + ' alt="">' +
            '<div class="cover">' +
            '<div class="btn-box">' +
            '<a href=' + json[i].href + '>观看</a>' +
            '<a href="#" title="收藏">' +
            '<div class="heart" ></div>' +
            '</a> </div> </div> </div>' +
            '<p>'+json[i].txt+'</p>' +
            '</div></div>';
        mangaInner+=htmlStr;
    }
    manga.innerHTML=mangaInner;
    //设置收藏按钮的变红效果
    var collectBtn;
    for (i=0;i<manga.children.length;i++){
        collectBtn=manga.children[i].children[0].children[0].children[1].children[0].children[1];
        collectBtn.onclick=function () {
            this.style.backgroundColor='red';
            return false;
        }
    }
    //设置底部刷新内容
    var screenH,lastBox,boxDis;
    var loginMobile=$('quick_login_mobile');
    window.onscroll=function () {
        //漫画底部无限刷新
        if (manga.style.display==='block'){
            screenH=document.documentElement.clientHeight+scroll().top;
            lastBox=manga.children[manga.children.length-1];
            boxDis=lastBox.offsetHeight+lastBox.offsetTop;
            if (screenH>boxDis){
                for (i=0;i<json.length;i++){
                    htmlStr='<div class="seal-box">' +
                        '<div class="manga-box">' +
                        '<div class="pic">' +
                        '<img src=' + json[i].pic + ' alt="">' +
                        '<div class="cover">' +
                        '<div class="btn-box">' +
                        '<a href=' + json[i].href + '>观看</a>' +
                        '<a href="#" title="收藏">' +
                        '<div class="heart" ></div>' +
                        '</a> </div> </div> </div>' +
                        '<p>'+json[i].txt+'</p>' +
                        '</div></div>';
                    mangaInner+=htmlStr;
                }
                manga.innerHTML=mangaInner;
                setTimeout(function () {
                    waterFall('manga');
                },100);
            }
        }
        //半透明快速登录界面的显示
        if (scroll().top>380){
            loginMobile.style.display='block';
        } else{
            loginMobile.style.display='none';
        }
        //回到顶部按钮的显示
        if (scroll().top>100){
            elevatorBtn.style.display='block';
        } else{
            elevatorBtn.style.display='none';
        }
    }
    //自动轮播
    var sliders=$('slider').children[0].children;
    var slideIndex=0;
    setInterval(function () {
        for (i=0;i<sliders.length;i++){
            if (i===slideIndex){
                bufferAnime(sliders[slideIndex],{opacity:1},null);
            } else {
                bufferAnime(sliders[i],{opacity:0},null);
            }
        }
        slideIndex=(slideIndex+1)%sliders.length;
    },2000)
    //回到顶部按钮
    var elevatorBtn=$('elevator');
    elevatorBtn.onclick=function () {
        bufferAnime(document.documentElement,{scrollTop:0});
    }
    //Login面板的设置
    var login=$('login');
    var loginCloseBtn=$('loginPanel_close');
    var loginBtn=$('loginPanel').getElementsByTagName('h1')[0];
    var loginAppearBtn=$('header_right').children[1];
    var loginRegisterBtn=$('login_register');
    loginBtn.onclick=function () {
        alert('老铁们 暂时不能登录！');
    }
    loginCloseBtn.onclick=function () {
        login.style.display='none';
    }
    loginAppearBtn.onclick=function () {
        login.style.display='block';
    }
    loginRegisterBtn.onclick=function () {
        login.style.display='none';
        register.style.display='block';
        return false;
    }
    //注册面板设置
    var register=$('register');
    var registerCloseBtn=$('registerPanel_close');
    var registerBtn=$('registerPanel').getElementsByTagName('h1')[0];
    var registerAppearBtn=$('header_right').children[0];
    registerAppearBtn.onclick=function () {
        register.style.display='block';
    }
    registerCloseBtn.onclick=function () {
        register.style.display='none';
    }
    registerBtn.onclick=function () {
        alert('老铁们，别注册了，看看得了2333');
    }
};


function $(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
}

function getMinHeightIndex(minHeight, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (minHeight === arr[i]) {
            return i;
        }
    }
}

function waterFall(parent) {
    main = document.getElementById(parent);
    boxs = main.children;
    var Width = document.documentElement.clientWidth;
    var w = boxs[0].offsetWidth;
    var cols = parseInt(Width / w);
    main.style.position = 'relative';
    main.style.width = cols * w + 'px';
    main.style.margin = "0 auto";
    var heightArr = [], minHeight = 0;
    for (i = 0; i < boxs.length; i++) {
        if (i < cols) {
            heightArr.push(boxs[i].offsetHeight);
            boxs[i].style = '';
        } else {
            minHeight = _.min(heightArr);
            var index = getMinHeightIndex(minHeight, heightArr);
            boxs[i].style.position = 'absolute';
            boxs[i].style.left = w * index + 'px';
            boxs[i].style.top = minHeight + 'px';
            heightArr[index] += boxs[i].offsetHeight;
        }
    }
}

function scroll() {
    if (window.pageYOffset !== null) {
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    } else if (document.compatMode === "CSS1Compat") { // W3C
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    }

    return {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
    }
}

function bufferAnime(obj, json, f) {
    clearInterval(obj.timer);
    var speed = 0, begin = 0, target = 0;
    obj.timer = setInterval(function () {
        var flag = true;
        for (var key in json) {
            if (key === 'opacity') {
                begin = parseInt(getCSSAttr(obj, key) * 100) || 0;
                target = parseInt(json[key] * 100);
            } else if (key === 'scrollTop') {
                begin = Math.ceil(obj.scrollTop);
                target = parseInt(json[key]);
            } else {
                begin = parseInt(getCSSAttr(obj, key)) || 0;
                target = parseInt(json[key]);
            }
            speed = (target - begin) * 0.1;
            speed = (target > begin) ? Math.ceil(speed) : Math.floor(speed);
            if (key === 'opacity') {
                obj.style.opacity = (begin + speed) / 100;
                obj.style.filter = 'alpha(opacity:' + (begin + speed) + ')';
            } else if (key === 'scrollTop') {
                obj.scrollTop = begin + speed;
            } else if (key === 'zIndex') {
                obj.style.zIndex = begin = json[key];
            } else {
                obj.style[key] = begin + speed + 'px';
            }


            if (target !== begin) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (f) {//回调函数
                f();
            }
        }

    }, 20)
}

function getCSSAttr(obj, attr) {
    if (obj.currentStyle) {//IE,Opera浏览器
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}