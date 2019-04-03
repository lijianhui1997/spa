$(function(){
  var xData=[];
  var yData=[];
  for(var p=0;p<=1;p+=0.1){
    xData.push(p);
    yData.push(h(p));

  }
  function h(p){
    if(p===0){
      return 0;
    }
      return  -1*p*Math.log2(p)-(1-p)*Math.log2(1-p);
  }

var myChart = echarts.init(document.getElementById('main'));
var option = {
  title: {
           text: '二进熵'
                                  
  },
        tooltip: {},
        legend: {
                  data:['二进熵曲线图']
                                              
              },
         xAxis: {
                  data:xData
                                              
              },
        yAxis: {},
       series: [{
                 name: '二进熵',
                 type: 'line',
                 smooth:"true",
                 data:yData                                                                       
                 }]
          
};
myChart.setOption(option);

})
