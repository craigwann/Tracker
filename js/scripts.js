$(document).ready(function() {
  $("#radio").submit(function(event) {
    var company = $("input:radio[name=company]:checked").val();

    if (company === "big") {
      $("#csharp").show();
      $("#ruby").hide();
      $("#react").hide();

    } else if (company === "small") {
      $("#ruby").show();
      $("#csharp").hide();
      $("#react").hide();

    };
    event.preventDefault();
  })

});
