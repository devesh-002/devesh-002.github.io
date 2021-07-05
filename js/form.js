var checktablemade = 0;

(function (window, document, undefined) {

    window.onload = init;

    function init() {
       
        keys = Object.keys(sessionStorage); keys.sort();
        var table = document.getElementById("myTable");
       
        for (i = 0; i < keys.length; i++) {
            let row = table.insertRow(i + 2); //alert("OK");
            var values=JSON.parse(sessionStorage.getItem(keys[i]));//alert(values);
            for (var j = 0; j < 4; j++) {
                el = row.insertCell(j);
                el.innerHTML = values[j];
            }
         
        }
    }

})(window, document, undefined);

function submitbutton() {
    checktablemade = 1;
    //checksessionmade();
    var arr = [];
    var email = document.getElementById("input1").value;
    arr[3] = email;
    if (email == "") {
        alert("Enter emailID");
        return;
    }
    var skill = document.getElementById("input2").value;
    arr[0] = skill;
    if (skill == "") {
        alert("Enter skill");
        return;
    }
    var name = document.getElementById("input3").value;
    arr[1] = document.getElementById("input4").value;


    if (name == "") {
        alert("Enter name");
        return;
    }
    //alert(name);
    arr[2] = name;

    var x = document.getElementById("myTable").rows.length;


    var table = document.getElementById("myTable");//alert(table);
    //alert(x);
    var row = table.insertRow(x);
    var el;
    var i; i = 0;

    sessionStorage.setItem(JSON.stringify(x), JSON.stringify(arr));
    var values = JSON.parse(sessionStorage.getItem(x));
    for (i = 0; i < 4; i++) {
        el = row.insertCell(i);//alert("K");
        el.innerHTML = values[i];
    }
    keys = Object.keys(sessionStorage);
    var ii = keys.length;
    //alert("length "+ii);
    keys.sort();
    //alert(keys)
}
