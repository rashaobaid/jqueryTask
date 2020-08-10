$(document).ready(function(){

$(".right").click(function(){
    var numdiv1 = $(".div1 .column").length;
    if( numdiv1>0){
        $(".div1 .column").each(function(){
                $(this).detach().appendTo('.div2');
                
          });
    }
      else{
        alert("There are no more boxes to move!");
    }
});

$(".left").click(function(){
    var numdiv2 = $(".div2 .column").length;
    if( numdiv2>0){
        $(".div2 .column").each(function(){
                $(this).detach().appendTo('.div1')
          });
    }
      else{
        alert("There are no more boxes to move!");
    }
});

});

