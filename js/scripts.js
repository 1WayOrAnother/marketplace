//var beverage = $("#beverage").val();
//var flavor = $("input:radio[name=flavor]:checked").val();
//var dob = $("#born").val();
//var favoriteColor = $("#color").val();



$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var itemInput= $("#item").val();
    //var shipInput = $("input#ship").val();
    var shipInput = $("input:radio[name=ship]:checked").val();


    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".item").text(itemInput);
    $(".ship").text(shipInput);

    $("#formOne").hide();
    $("#reciept").show();

    event.preventDefault();
  });
});
