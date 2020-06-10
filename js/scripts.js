//change background when user clicks a button
$(document).ready(function(){
  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background");
  });
})
//show or hide an element
$(document).ready(function(){
  $("#hide").click(function(){
    $("img.toggle").hide();
  });
  $("#show").click(function(){
    $("img.toggle").show();
  });
});
//highlight first paragraph on hover
$(document).ready(function(){
  $("p:first").hover(function(){
    $(this).css("background-color","#32a897");
  },function(){
    $(this).css("background-color","#e9ecef");
  })
});
