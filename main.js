var studentnamesarray = [];
function submit() {
    var displaystudentarray = [];

    for (var j = 1; j <= 4; j++) {
        displaystudentarray.push(document.getElementById("nameofStudent" + j).value);

    }




    document.getElementById("getpara").innerHTML = displaystudentarray.join(". ");

}