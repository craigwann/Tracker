$(document).ready(function() {
  $("#radio").submit(function(event) {
    var company = $("input:radio[name=company]:checked").val();

    if (company === "big") {
      $("#csharp").show();
      $("#ruby").hide();
    } else if (company === "Snakes") {
      $("#ruby").show();
      $("#csharp").hide();
    };
    event.preventDefault();
  })

});
