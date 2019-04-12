$(function(){
  var main=$('#main');
  
  var hotSettings = {
    data: [
      [
        '小李','男','18','河北师大','软件学院','4班'
      ],
      [
        '张鑫','女','19','河北师大','软件学院','4班'
      ]
    ],
    contextMenu:!0,
    manualRowResize:!0,
    manualColumnResize:!0,
    rowHeaders:!0,colHeaders:['姓名','性别','年龄','学校','学院','班级']
  };
  var hot = new Handsontable(main.get(0), hotSettings);
  return hot;
})
