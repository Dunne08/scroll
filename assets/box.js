
$(document).ready(function () {

  //group-box 1
  var leftPanel1 = $('.box1.over1.left1');
  var rightPanel1 = $('.box1.over1.right1');
  var zIndexOrder1 = ['.under1.right1', '.over1.right1', '.under1.left1', '.over1.left1'];
  var zIndexOrderFlipped1 = ['.under1.left1', '.over1.left1', '.under1.right1', '.over1.right1'];

  function setStacking(order1) {
    for (var i = 0; i < order1.length; i++) {
      $('.box1' + order1[i]).css('z-index', i);
    }
  }
  $("#container1").click(function() {
    $('html, body').animate({
        scrollTop:$("#container1").offset().top+30
    }, 1000);
    leftPanel1.on('click', function (ev) {
      setStacking(zIndexOrder1);
      $('.box1.under1.left1').toggleClass('expanded1');
    });
  
    rightPanel1.on('click', function (ev) {
  
      setStacking(zIndexOrderFlipped1);
      $('.box1.under1.right1').toggleClass('expanded1');
    });
});
 
});

$(document).ready(function () {
  //group-box 2
  var leftPanel2 = $('.box2.over2.left2');
  var rightPanel2 = $('.box2.over2.right2');
  var zIndexOrder2 = ['.under2.right2', '.over2.right2', '.under2.left2', '.over2.left2'];
  var zIndexOrderFlipped2 = ['.under2.left2', '.over2.left2', '.under2.right2', '.over2.right2'];

  function setStacking(order2) {
    for (var i = 0; i < order2.length; i++) {
      $('.box2' + order2[i]).css('z-index', i);
    }
  }
  $("#container2").click(function() {
    $('html, body').animate({
        scrollTop:$("#container2").offset().top+30
    }, 1000);
    leftPanel2.on('click', function (ev2) {
      setStacking(zIndexOrder2);
      $('.box2.under2.left2').toggleClass('expanded2');
    });
  
    rightPanel2.on('click', function (ev2) {
      setStacking(zIndexOrderFlipped2);
      $('.box2.under2.right2').toggleClass('expanded2');
    });
});

});

$(document).ready(function () {
  //group-box 3
  var leftPanel3 = $('.box3.over3.left3');
  var rightPanel3 = $('.box3.over3.right3');
  var zIndexOrder3 = ['.under3.right3', '.over3.right3', '.under3.left3', '.over3.left3'];
  var zIndexOrderFlipped3 = ['.under3.left3', '.over3.left3', '.under3.right3', '.over3.right3'];

  function setStacking(order3) {
    for (var i = 0; i < order3.length; i++) {
      $('.box3' + order3[i]).css('z-index', i);
    }
  }

  $("#container3").click(function() {
    $('html, body').animate({
        scrollTop:$("#container3").offset().top+30
    }, 1000);
    leftPanel3.on('click', function (ev3) {
      setStacking(zIndexOrder3);
      $('.box3.under3.left3').toggleClass('expanded3');
    });
  
    rightPanel3.on('click', function (ev3) {
      setStacking(zIndexOrderFlipped3);
      $('.box3.under3.right3').toggleClass('expanded3');
    });
});
 

});

$(document).ready(function () {
  //group-box 4
  var leftPanel4 = $('.box4.over4.left4');
  var rightPanel4 = $('.box4.over4.right4');
  var zIndexOrder4 = ['.under4.right4', '.over4.right4', '.under4.left4', '.over4.left4'];
  var zIndexOrderFlipped4 = ['.under4.left4', '.over4.left4', '.under4.right4', '.over4.right4'];

  function setStacking(order4) {
    for (var i = 0; i < order4.length; i++) {
      $('.box4' + order4[i]).css('z-index', i);
    }
  }
  $("#container4").click(function() {
    $('html, body').animate({
        scrollTop:$("#container4").offset().top+30
    }, 1000);

    leftPanel4.on('click', function (ev4) {
      setStacking(zIndexOrder4);
      $('.box4.under4.left4').toggleClass('expanded4');
    });
  
    rightPanel4.on('click', function (ev4) {
      setStacking(zIndexOrderFlipped4);
      $('.box4.under4.right4').toggleClass('expanded4');
    });
});
  

$("#image-js").click(function() {
  $('html, body').animate({
      scrollTop: $("#containernew").offset().top+160
  }, 2000);
});

});

 
