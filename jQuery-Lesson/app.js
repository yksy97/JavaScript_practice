// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// 省略形
// $(function(){
// ('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $('セレクタ').css('background-color','#0000FF');


// $(function(){
//   $('.box1').slideDown(5000);
// });

// $(function(){
//   $('.box1').slideUp(5000);
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// $(function(){
//   $('.box1').hide(5000);
// });

// $(function (){
//   $('.box1').slideDown(function (){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp(5000);
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// 【マウスクリックイベントの記述】
// クリック後に複数のイベントが行われるようにしたいので、onを付ける

// $('.セレクタ名').on('click', function() {
//   イベント発生時に行われる処理
// });

// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp(5000);
//   });

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp(4000);
//   });

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp(3000);
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp(2000);
//   });
// });

// // 省略形
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});