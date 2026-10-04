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
const mainCaption = document.querySelector('.gallery-image .gallery-title p');
const galleryComs = document.querySelector('.gallery-com p');

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', (event) => {

        console.log('mouseover発生');

        //メイン画像を変更
        mainImage.src = event.target.src;
        // メイン画像のタイトルを変更
        mainCaption.innerHTML = event.target.dataset.title;

        //カーソルが載ったサムネイルのfigureを取得
        const thumbnailFigure = event.target.closest('figure');
        //そのfigureの中のコメントを取得
        const comment = thumbnailFigure.querySelector('.gallery-com p');
        //メイン画像の諸谷コメントを表示

        galleryComs.textContent = comment.textContent;
        console.log('表示先:', galleryComs);
        console.log('入れた文字:', galleryComs.textContent);
        console.log('表示状態:', JSON.stringify(getComputedStyle(galleryComs).display));
        console.log('visibility:', JSON.stringify(getComputedStyle(galleryComs).visibility));
        console.log('opacity:', JSON.stringify(getComputedStyle(galleryComs).opacity));


        console.log('galleryComs:', galleryComs);
        console.log('tagName:', galleryComs.tagName);
        console.log('textContent:', galleryComs.textContent);
        console.log('outerHTML:', galleryComs.outerHTML);

        console.log(galleryComs.outerHTML);

        console.log(getComputedStyle(galleryComs));





        // galleryComs.textContent = event.target.dataset.comment;
        // console.log(galleryComs[i].textContent);

        // galleryComs.style.display = 'block';

    });
}



