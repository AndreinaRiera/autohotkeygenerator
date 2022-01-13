import { imageSize, imageCurrentResize, randomSortArray } from "@functions/utils";

export default function popupImages(props) {
    const src = props.hasOwnProperty('src') ? props.src : "/images/popupImages/";
    const time = 400;

    function generateMaxHeightImg(imageSizeResult, max = 200) {
        var maxHeightImg = (imageSizeResult && imageSizeResult[1]) ? imageSizeResult[1] : 0;
        return (maxHeightImg && (maxHeightImg < max)) ? maxHeightImg : max;
    }

    function generatePosTop(maxHeightImg) {
        var windowInnerHeight = window.innerHeight;
        return (Math.floor(Math.random() * (windowInnerHeight - maxHeightImg)));
    }

    function generatePosLeft(maxWidthImg) {
        return Math.floor(Math.random() * (window.innerWidth - maxWidthImg));
    }

    const images = [];
    const imagesPosPrevius = [];

    function appendImgToBody(image, maxWidthImg, maxHeightImg, top, left) {
        const img = document.createElement('img');
        img.src = src + image;
        img.style.cssText = `position: absolute; 
            width: ${maxWidthImg}px;
            height: ${maxHeightImg}px;
            top: ${top}px; 
            left: ${left}px;
            z-index: 999999999;`;

        document.body.appendChild(img);
        images.push(img);
    }

    function isOverlayImg(top, heightImg, left, widthImg) {
        for (const img of imagesPosPrevius) {
            var top_img = img['top'][0];
            var bottom_img = img['top'][1];

            var left_img = img['left'][0];
            var right_img = img['left'][1];

            var left_ = [left, (left + widthImg)];
            var top_ = [top, (top + heightImg)];

            // for the new img
            for (let index_left = 0; index_left < left_.length; index_left++) {
                for (let index_top = 0; index_top < top_.length; index_top++) {
                    if (
                        ((top_[index_top] >= top_img) && (top_[index_top] <= bottom_img)) &&
                        ((left_[index_left] >= left_img) && (left_[index_left] <= right_img))
                    ) {
                        return true;
                    }
                }
            }

            // for the previus img
            for (let index_left = 0; index_left < left_.length; index_left++) {
                for (let index_top = 0; index_top < top_.length; index_top++) {
                    if (
                        ((top_img >= top_[index_top]) && (bottom_img <= top_[index_top])) &&
                        ((left_img >= left_[index_left]) && (right_img <= left_[index_left]))
                    ) {
                        return true;
                    }
                }
            }

        }

        return false;
    }

    if (props.images) {
        var withoutSpace = false;

        var arr_images = randomSortArray(props.images);

        for (let i = 0; i < arr_images.length; i++) {
            const image = arr_images[i];
            createImg(image, i);
        }

        var total_iterator = 0;
        function createImg(image, i) {
            setTimeout(() => {
                imageSize(src + image).then(imageSizeResult => {
                    var heightImg = generateMaxHeightImg();
                    var widthImg = imageCurrentResize(imageSizeResult, heightImg);

                    var overlayImg = false;
                    var top, left;

                    var iterator = 0;

                    do {
                        top = generatePosTop(heightImg);
                        left = generatePosLeft(widthImg);

                        overlayImg = ((iterator >= 5) || withoutSpace) ? false : isOverlayImg(top, heightImg, left, widthImg);

                        if (total_iterator >= 15) {
                            withoutSpace = true;
                        }

                        iterator++;
                        total_iterator++;
                    } while (overlayImg);

                    imagesPosPrevius.push({
                        top: [top, (top + heightImg)],
                        left: [left, (left + widthImg)]
                    });

                    top = top + (document.documentElement.scrollTop || document.body.scrollTop);

                    appendImgToBody(image, widthImg, heightImg, top, left);
                }).catch(err => console.error(err));
            }, time * i);
        }

        setTimeout(() => {
            images.forEach(img => {
                document.body.removeChild(img);
            });
        }, (time * props.images.length) + 1500);
    }
}
