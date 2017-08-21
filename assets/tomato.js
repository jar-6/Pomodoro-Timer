
$(document).ready(function(){

var periodMin="00";var periodSec="00";var id;var n=0;var speed;
$("#cir-right").hide();
$("#cir-back0,#cir-back1").addClass("back1");
function countDown() {
    var speed2="circleProgressLoad_right "+speed*60+"s linear 1";
     $(".rotate").css("-webkit-animation",speed2);
  var ori=periodMin;
  periodSec=periodSec-1;
  var periodSec2=periodSec;
  var periodMin2=periodMin;
  var all=periodSec+periodMin*60;
  var all2=(ori+1)*60;
  $("#cir-back0,#cir-back1").addClass("back1");
  $("#time").text(periodMin2+":"+periodSec2);
  console.log(all,all2);
  
  if(all2===2*all){console.log(1);$("#cir-right").show();$("#cir-back1").hide();}
  if(periodSec<10){periodSec2="0"+periodSec;}
  if(periodSec===60){periodSec2="00";periodMin2=periodMin+1;}
  if(periodMin<10){periodMin2="0"+periodMin2;}
  if(periodMin===0&&periodSec===0&&n===0){
    $("#cir-back0,#cir-back1").removeClass("back1");
    $("#cir-back0,#cir-back1").addClass("back2");
    set();
    get($("#break").val());
    n=1;
    }
  if(periodMin===0&&periodSec===0&&n===1){
    addTomato();
    $("#cir-back0,#cir-back1").removeClass("back2");
    $("#cir-back0,#cir-back1").addClass("back1");
    set();
    get($("#period").val());
    n=0;
    
    }
  if(periodSec===0&&periodMin!==0){periodMin=periodMin-1;periodSec=60;}
  $("#time").text(periodMin2+":"+periodSec2);
} 

function get(value){
  speed=value;var value2=value;
  if (value<10){value2="0"+value;}
  periodMin=value-1; 
 periodSec=60;
 $("#time").text(value2+":00");
}
function set(){
  $("#cir-left").remove();
  $(".frame").append('<div id="cir-left" class="cir rotate"></div>');
   $(".rotate").css("-webkit-animation","circleProgressLoad_right 5s linear 0");
  $("#cir-right").hide();
    $("#cir-back1").show();
}
function addTomato(){
  var one=document.createElement("img");  one.src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=867802939,2364735772&fm=23&gp=0.jpg"
    one.className="small-tomato";
    var tomatoesDiv=document.getElementById("tomatoes");
    tomatoesDiv.appendChild(one);}

$("#start").click(
  function(){
    $("#cir-back0,#cir-back1").removeClass("back2");
    $("#cir-back0,#cir-back1").addClass("back1");
  clearInterval(id);
  set();
  get($("#period").val());
id = setInterval(countDown, 1000);
//countDown();

 }
);

$("#stop").click(
  function(){
  $(".small-tomato").remove();
  $("#cir-left").remove();
  $("#cir-right").hide();
  clearInterval(id);
  periodMin="00";periodSec="00";
  $("#time").text(periodMin+":"+periodSec);}
  
);
})