$(
    function () {
        var box = document.querySelector(".mycontainer");
        $(window).on("resize", function () {
            clientW = window.innerWidth;
            if (clientW > 1200) {
                box.style.width = '1170px';
            } else if (clientW > 992) {
                box.style.width = '970px';
            } else if (clientW > 768) {
                box.style.width = '750px';
            } else {
                box.style.width = '100%';
            }

            var clientW = $(window).width();
            let imgs = $('.bb-img').children();
            if (clientW <= 640) {
                imgs.each(function (index, item) {
                    let src = $(item).data('sm-img');
                    let url = 'url("' + src + '")';
                    let img = document.createElement('img');
                    img.src = src;
                    $(item).empty().append(img);
                })
            } else {
                imgs.each(function (index, item) {
                    $(item).empty();
                })
            }

        });
        $('.carousel').carousel({
            interval: 3000,
            pause: null
        });


        $(window).trigger("resize");

        setTimeout(function () {
            box.style.display = 'none';
        }, 3000);

        $('[data-toggle="tooltip"]').tooltip();

        let aboutUsBtn=$('#about_us');
        aboutUsBtn.on('click',function () {
            $('html,body').animate({scrollTop:$('.bb-about').offset().top},1000);
        });
        let aboutClassBtn=$('#about_class');
        aboutClassBtn.on('click',function () {
            $('html,body').animate({scrollTop:$('.bb-hot').offset().top},1000);
        });

    }
);
