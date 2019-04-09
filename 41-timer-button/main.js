/*export $tmiebtn true*/
var $timebtn=(function(){

  var init=function(){
    //绘制DOM结构

  
  var n=6;
  var DOM='<input class="timer-button" type="button" value="同意（6s）" disabled/>';
  var $container=$('#main');
  $container.html(DOM);
  var $buttonagree=$container.find('.timer-button');
  var timer=window.setInterval(()=>{
    n--;
    if(n==0){
      window.clearInterval(timer);
      $buttonagree.removeAttr('disabled');
      $buttonagree.val('同意');
    }else{
      $buttonagree.val('同意('+n+'s)');
      
    }
  },1000);
  $buttonagree.click(()=>{
    alert('spa-timer-button task')
  })

  };

  return {
    'init':init,
  }

}())

