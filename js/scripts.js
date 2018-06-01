$(document).ready(function() {
  $("#radio").submit(function(event) {
    var company = $("input:radio[name=company]:checked").val();
    var end = $("input:radio[name=end]:checked").val();
    var prog = $("input:radio[name=prog]:checked").val();
    var lego = $("input:radio[name=lego]:checked").val();
    var micro = $("input:radio[name=micro]:checked").val();




    if (company === "big" && end === "back" && micro === "love") {
      $("#csharp").show();
      $("#ruby").hide();
      $("#react").hide();

    } else if (company === "small" && end === "back" && prog === "webapp" && lego === "shape") {
      $("#ruby").show();
      $("#csharp").hide();
      $("#react").hide();

    } else if (end === "front" && ) {
      $("#ruby").show();
      $("#csharp").hide();
      $("#react").hide();

    } else if (company === "small") {
      $("#ruby").show();
      $("#csharp").hide();
      $("#react").hide();

    } else if (company === "small") {
      $("#ruby").show();
      $("#csharp").hide();
      $("#react").hide();

    } else if (company === "small") {
      $("#ruby").show();
      $("#csharp").hide();
      $("#react").hide();

    };
    event.preventDefault();
  })

});
