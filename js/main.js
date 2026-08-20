$('.hum_menu').on('click', () => {
    $('header').toggleClass('on');
});

$(window).on('resize', () => {
    $('header').removeClass('on');
});


//画像の回転　3枚ずつ表示１枚入れ替え。
$('.main_rotate ul').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000

});

//画像が見える範囲になったら画像が横から見えるようにする。
const slide_func = (entries) => {
    // console.log(entries);
    for (entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('on');
        }
    }
}
const slide_param = {
    rootMargin: '-200px'
}
const slide_ob = new IntersectionObserver(slide_func);

const targets = document.querySelectorAll('.img_wrap');

for (target of targets) {
    slide_ob.observe(target);
}




/*====================
画像ギャラリー-紅茶-
=====================*/
//拡大して見れるようにする。

const mainImage = document.querySelector('.gallery-image img');
const thumbnails = document.querySelectorAll('.gallery_thumbnails img');
const mainCaption = document.querySelector('.gallery-image figcaption');


for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', (event) => {
        mainImage.src = event.target.src;
        mainCaption.innerHTML = event.target.dataset.title;

        // mainImage.animate({ opacity: [0, 1] }, 500)

    });
}