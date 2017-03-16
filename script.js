$(document).ready(function(){
var ScriptEders = ["Joe", "Dennis", "Nate", "Chinnell"];
var ScriptEducators = ["Kevin", "Brian", "Paulson", "Ricky"];

$("#studentButton").click(function() {
    rand1 = Math.floor(Math.random() * ScriptEducators.length);
    $("#studentDisplay").html(ScriptEducators[rand1]);
});
$("#teacherButton").click(function() {
    rand2 = Math.floor(Math.random() * ScriptEders.length);
    $("#teacherDisplay").html(ScriptEders[rand2]);
});

$("#studentButton2").click(function() {
    var studentval = $("#studentInput").val();
    if (studentval != "") {
        ScriptEducators.push(studentval);
    }
});
$("#teacherButton2").click(function() {
    var teacherval = $("#teacherInput").val()
    if (teacherval != "") {
        ScriptEders.push(teacherval);
    }
});
});