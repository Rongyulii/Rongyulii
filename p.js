$(document).ready(function() {
alert("3");
alert("2");
alert("1");
alert("HAHAHAHAHAHAHAHAHHAHAHAHAHA");
$("#t1").draggable();
$("#t1").hover(function(){
$("#t2").append("THERE IS A CAT");
});
$("#t2").click(function(){
$("#t1").show();
});

})
