window.onload = function () {
    var box = $('box');
    var imgs = $('img').children;
    var ctrl = $('ctrl');
    box.onmouseover = function () {
        bufferAnime(ctrl, {opacity: 1});
    };
    box.onmouseout = function () {
        bufferAnime(ctrl, {opacity: 0});
    };

    var json = [
        {width: 200, top: 20, left: 100, opacity: 0.2, zIndex: 2},
        {width: 300, top: 70, left: 50, opacity: 0.7, zIndex: 3},
        {width: 600, top: 100, left: 300, opacity: 1, zIndex: 4},
        {width: 300, top: 70, left: 850, opacity: 0.7, zIndex: 3},
        {width: 200, top: 20, left: 850, opacity: 0.2, zIndex: 2},
    ];
    loadImg();

    for (i=0;i<ctrl.children.length;i++) {
        ctrl.children[i].onclick = function () {
            if (this.id === 'pre') {
                json.unshift(json.pop());
                loadImg();
            } else if (this.id === 'next') {
                json.push(json.shift());
                loadImg();
            }
        }
    }

    function loadImg() {
        for (i = 0; i < imgs.length; i++) {
            bufferAnime(imgs[i], json[i]);
        }
    }

    //设置轮播图片的链接
    for (i = 0; i < imgs.length; i++) {
        (function (i) {
            switch (imgs[i].id) {
                case 'img1':
                    break;
                case 'img5':
                    imgs[i].onclick=function () {
                        window.location='schoolWeb/index.html';
                    };
                    break;
                case 'img2':
                    imgs[i].onclick=function () {
                        window.location='searchWeb/index.html';
                    };
                    break;
                case 'img3':
                    imgs[i].onclick=function () {
                        window.location='mangaWeb/index.html';
                    };
                    break;
                case 'img4':
                    imgs[i].onclick=function () {
                        window.location='albumWeb/fasu.html';
                    };
                    break;
                default:
                    break;
            }
        })(i)
    }

};


/**
 * 设置缓动动画
 * @object obj
 * @json json
 * @function f
 */
function bufferAnime(obj, json, f) {
    clearInterval(obj.timer);
    var speed = 0, begin = 0, target = 0;
    obj.timer = setInterval(function () {
        var flag = true;
        for (var key in json) {
            if (key === 'opacity') {
                begin = parseInt(getCSSAttr(obj, key) * 100);
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

/**
 * 获取CSS属性值
 * @object obj
 * @string attr
 */
function getCSSAttr(obj, attr) {
    if (obj.currentStyle) {//IE,Opera浏览器
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}

function $(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
}
