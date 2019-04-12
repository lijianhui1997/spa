$(function(){
  var n=$("#add-password"),
  a=$("#get-password"),
  o=[];
  n.click(function(){var n=new PasswordTextbox({container:"#main"});
  o.push(n);
  a.removeAttr("disabled");
  }),
  a.click(function(){o.forEach(function(n){alert(n.getPwd())})})});
