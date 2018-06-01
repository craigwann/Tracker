$(document).ready(function() {
  $("#survey").submit(function(event) {
    // var inputCoSize = $("input#coSize").val();
    var inputCoSize = $("input:radio[name=inputCoSize]:checked").val();

    // $(".coSize").text(inputcoSize);
    if (inputCoSize === big) {
    $("#csharp").show();
  } else {
    $("#csharp").hide();
  };
    event.preventDefault();
  })

});
