$(function(){
  var $psw=$('#psw');
  var $content=$('input[type="text"]');
  var $eye=$('#eye');
  $eye.mouseover(function(){
    $content.val($psw.val());
    $content.css("display","block");
  });
  $eye.mouseout(function(){
     
  });
});
