let $slider = $('#slider');
let $sliderBg = $('.slider-bg');

let $pageviewCount = $('#pageview-count');
let $priceCount = $('#price-count');
let $toggleBtn = $('#btn');

const priceCount = (discount = 0) => {
    switch($slider[0].value) {
        case '1': return `$${8 - (8 * discount / 100)}.00`;
        case '2': return `$${12 - (12 * discount / 100)}.00`; 
        case '3': return `$${16 - (16 * discount / 100)}.00`; 
        case '4': return `$${24 - (24 * discount / 100)}.00`; 
        case '5': return `$${36 - (36 * discount / 100)}.00`; 
    }
};

$slider.change(function() {
    // change slider bg
    $sliderBg.width(`${(this.value * 25) - 25}%`);

    let sliderValue = [10, 50, 100, 500, 1000];

    let pageviewCount = sliderValue[this.value - 1] == 1000 ? '1M' : `${sliderValue[this.value - 1]}K`;
    $pageviewCount.text(pageviewCount);

    if($toggleBtn[0].checked) {
        $priceCount.text(priceCount(25));
    } else {
        $priceCount.text(priceCount());
    }
});

$toggleBtn.change(() => {
    if($toggleBtn[0].checked) {
        $priceCount.text(priceCount(25));
    } else {
        $priceCount.text(priceCount());
    }
});
