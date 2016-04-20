var destDate = new Date(2017,6,22);

$(document).ready(function() {
  setInterval(updateTime, 1000);
  
  $("button").click(function() {
    var todoToAdd = $("input").val();
    $("#todo-area").append("<p id='todo-item'> - " + todoToAdd + "</p>");
    $("input").val("");
  })
  
  $(document).on("click","#todo-item", function() {
    $(this).css("text-decoration","line-through");
    $(this).css("color","gray");
  })
})

function updateTime() {
  clearTime();
  var arr = getDiff();
  $("#time-area").append("<p>" + arr[0] + " days</p>");
  $("#time-area").append("<p>" + arr[1] + " hours</p>");
  $("#time-area").append("<p>" + arr[2] + " minutes</p>");
  $("#time-area").append("<p>" + arr[3] + " seconds</p>");
}

function clearTime() {
  var myNode = document.getElementById("time-area");
  var fc = myNode.firstChild;

  while( fc ) {
    myNode.removeChild( fc );
    fc = myNode.firstChild;
  }
}

function getDiff() {
  var milliDiff = destDate - Date.now();
  var days = Math.floor(milliDiff/(1000*60*60*24));
  var millisAfterDays = milliDiff - (days * 24 * 60 * 60 * 1000);
  var hours = Math.floor(millisAfterDays/(1000 * 60 * 60));
  var millisAfterHours = milliDiff - (days * 24 * 60 * 60 * 1000) - (hours * 1000 * 60 * 60);
  var minutes = Math.floor(millisAfterHours/(1000 * 60));
  var millisAfterMins = milliDiff - (days * 24 * 60 * 60 * 1000) - (hours * 1000 * 60 * 60) - (minutes * 1000 * 60);
  var seconds = Math.floor(millisAfterMins/(1000));
  return [days, hours, minutes, seconds];
}
