//$(window).ready(function(){
 //   alert("its working");
//})//

$("li").click(function(){
    alert("click");
})

$("#btn").click(function(){
   $("#h1").text("testing");
   $("#h1").append("testing");
})

$("#btn2").on("click", function(){
    console.log('second button is clicked')
})

$("#mydiv").clicked(function(){
    $(this).addclass("clicked")
})

$("btn3").click(function(){

})