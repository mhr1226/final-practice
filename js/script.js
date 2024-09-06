$('.carousel,.sp-carousel').slick({
  autoplay: true,
  infinite: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover:false,
  pauseOnFocus:false,
  slidesToShow:1,
  slidesToScroll:1,
});

// プログレスバーの処理

// setInterval(clearInterval)用の変数定義
let timerId;
// スライドが動いた時のカウンタ変数
let countSliders = 0;

// アニメーションの実行
function progressAnimation(){
  // 現在のvalueの取得
  let nowProgressVal = $('progress').val();
  // value値から1%ずつマイナス
  nowProgressVal --;
  // プログレスバーの更新
  $('progress').val(nowProgressVal);
  // 0になった時の終了の合図
  if(nowProgressVal <= 0){
    clearInterval(timerId);
  }
  
}

// 読み込み時のプログレスタイマースタート
$(document).ready(() =>{
  timerId = setInterval(progressAnimation,30);
});

// スライド開始時にプログレスバーアニメーションをスタート
$('.carousel').on('afterChange',function(event,slick,currentSlide){
  // setIntervalをリセットし、秒数を制御
  clearInterval(timerId);
  // プログレスバーを100に設定
  $('progress').val(100);
  // スライド更新カウンタ
  countSliders ++;

  // slickのスライダーが4枚*3周=12回表示されたら処理を止める
  if(countSliders >= 12){
    $('progress').val(0);
    $('.carousel').slick('slickPause');
    return;
  }
  timerId = setInterval(progressAnimation,30);
});







