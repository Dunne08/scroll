$(document).ready(function(){
  var player0 = new Plyr('#player0', {
  });
// Expose player so it can be used from the console
  window.player = player0;

  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $(".video0").attr('src');
  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#video-modal-0").on('hide.bs.modal', function(){
    player0.stop();
 
      $(".video0").attr('src', '');
  });
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#video-modal-0").on('show.bs.modal', function(){
    $('.box0.under0.left0').toggleClass('expanded0');
    player0.play();

      $(".video0").attr('src', url);
  });
});
$(document).ready(function(){
  var player1 = new Plyr('#player1', {
  });
// Expose player so it can be used from the console
  window.player = player1;

  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $(".video1").attr('src');
  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#video-modal-1").on('hide.bs.modal', function(){
    player1.stop();
 
      $(".video1").attr('src', '');
  });
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#video-modal-1").on('show.bs.modal', function(){
    $('.box1.under1.left1').toggleClass('expanded1');
    player1.play();

      $(".video1").attr('src', url);
  });
});

$(document).ready(function(){
  var player2 = new Plyr('#player2', {});
// Expose player so it can be used from the console
window.player = player2;
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $(".video2").attr('src');
  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#video-modal-2").on('hide.bs.modal', function(){
    player2.stop();

      $(".video2").attr('src', '');
  });
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#video-modal-2").on('show.bs.modal', function(){
    $('.box1.under1.right1').toggleClass('expanded1');
    player2.play();

      $(".video2").attr('src', url);
  });
});

$(document).ready(function(){
  var player3 = new Plyr('#player3', {});
// Expose player so it can be used from the console
  window.player = player3;
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $("#video3").attr('src');
  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#video-modal-3").on('hide.bs.modal', function(){
    player3.stop();
 
      $("#video3").attr('src', '');
  });
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#video-modal-3").on('show.bs.modal', function(){
    $('.box2.under2.left2').toggleClass('expanded2');
    player3.play();

      $("#video3").attr('src', url);
  });
});

$(document).ready(function(){
  var player4 = new Plyr('#player4', {});
// Expose player so it can be used from the console
  window.player = player4;
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $("#video4").attr('src');
  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#video-modal-4").on('hide.bs.modal', function(){
    player4.stop();
 
      $("#video4").attr('src', '');
  });
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#video-modal-4").on('show.bs.modal', function(){
    $('.box2.under2.right2').toggleClass('expanded2');
    player4.play();

      $("#video4").attr('src', url);
  });
});
$(document).ready(function(){
  var player5 = new Plyr('#player5', {});
// Expose player so it can be used from the console
  window.player = player5;
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $("#video5").attr('src');
  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#video-modal-5").on('hide.bs.modal', function(){
    player5.stop();
 
      $("#video5").attr('src', '');
  });
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#video-modal-5").on('show.bs.modal', function(){
    $('.box3.under3.left3').toggleClass('expanded3');
    player5.play();

      $("#video5").attr('src', url);
  });
});
$(document).ready(function(){
  var player6 = new Plyr('#player6', {});
// Expose player so it can be used from the console
  window.player = player6;
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $("#video6").attr('src');
  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#video-modal-6").on('hide.bs.modal', function(){

    player6.stop();
 
      $("#video6").attr('src', '');
  });
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#video-modal-6").on('show.bs.modal', function(){
    $('.box3.under3.right3').toggleClass('expanded3');
    player6.play();

      $("#video6").attr('src', url);
  });
});
$(document).ready(function(){
  var player7 = new Plyr('#player7', {
  });
// Expose player so it can be used from the console
  window.player = player7;
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $("#video7").attr('src');
  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#video-modal-7").on('hide.bs.modal', function(){
    $('.box4.under4.left4').toggleClass('expanded4');

    player7.stop();
 
      $("#video7").attr('src', '');
  });
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#video-modal-7").on('show.bs.modal', function(){
    player7.play();

      $("#video7").attr('src', url);
  });
});
$(document).ready(function(){
  var player8 = new Plyr('#player8', {});
// Expose player so it can be used from the console
  window.player = player8;
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $("#video8").attr('src');
  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#video-modal-8").on('hide.bs.modal', function(){
    player8.stop();
 
      $("#video8").attr('src', '');
  });
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#video-modal-8").on('show.bs.modal', function(){
    $('.box4.under4.right4').toggleClass('expanded4');
    player8.play();

      $("#video8").attr('src', url);
  });
});