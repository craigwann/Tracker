$(document).ready(function() {
  $("#radio").submit(function(event) {
    var animal = $("input:radio[name=animal]:checked").val();

    if (animal === "Frogs") {
      $("#frogs").show();
      $("#snakes").hide();
    } else if (animal === "Snakes") {
      $("#snakes").show();
      $("#frogs").hide();
    };
    event.preventDefault();
  })

});
