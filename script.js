$(".panel1").click(function(){ 
    $(".panel1").addClass("active");
    $(".panel2, .panel3, .panel4").removeClass("active");
});
$(".panel2").click(function(){ 
    $(".panel2").addClass("active");
    $(".panel1, .panel3, .panel4").removeClass("active");
});
$(".panel3").click(function(){ 
    $(".panel3").addClass("active");
    $(".panel1, .panel2, .panel4").removeClass("active");
});
$(".panel4").click(function(){ 
    $(".panel4").addClass("active");
    $(".panel1, .panel2, .panel3").removeClass("active");
});
