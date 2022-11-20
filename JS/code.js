$(function(){

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

$("#certificationImageEin").css("display","none");
$("#certificationImageZwei").css("display","none");
$("#certificationImageDrei").css("display","none");

$("#certificationTextEin").click(function(){
    $("#certificationImageEin").show();
    $("#certificationTextEin").hide();
});

$("#certificationImageEin").click(function(){
  $("#certificationTextEin").show();
  $("#certificationImageEin").hide();
});

$("#certificationTextZwei").click(function(){
  $("#certificationImageZwei").show();
  $("#certificationTextZwei").hide();
});

$("#certificationImageZwei").click(function(){
  $("#certificationImageZwei").hide();
  $("#certificationTextZwei").show();
});

$("#certificationTextDrei").click(function(){
  $("#certificationImageDrei").show();
  $("#certificationTextDrei").hide();
});

$("#certificationImageDrei").click(function(){
  $("#certificationImageDrei").hide();
  $("#certificationTextDrei").show();
});

});

