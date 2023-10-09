
function validateform() {
  var name = document.myform.name.value;
  var email = document.myform.email.value;
  var city = document.myform.city.value;
  var mob = document.myform.mob.value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (name == null || name == "" && email == null || email == "" && city == null || city == "" && mob == null || mob == "") {
    alert("fill all fields")
    return false
  }
  else if (!filter.test(email)) {
    alert('Invalid email');
    return false
  }

  else if (mob == "") {
    alert("fill mobile number")
    return false
  }
  else if (isNaN(mob)) {
    alert("enter number")
    return false
  }
  else if (mob.length < 10 || mob.length > 10) {
    alert("enter valid number")
    return false
  }
  else {
    alert("successfully submited")
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = document.getElementById("n4").value;

    var table = `<tr>
           <td>${n1}</td>
           <td>${n2}</td>
           <td>${n3}</td>
           <td>${n4}</td>
           </tr>`

    document.getElementById("data").innerHTML += table;
    // document.getElementById("data").innerHTML += table;
    myform.reset();



    // document.getElementById("data1").innerHTML = `${n1}`;
    // document.getElementById("data2").innerHTML = `${n2}`;
    // document.getElementById("data3").innerHTML = `${n3}`;
    // document.getElementById("data4").innerHTML = `${n4}`;
    return false

  }



}

// function insert() {
//   var n1 = document.getElementById("n1").value;
//   var n2 = document.getElementById("n2").value;
//   var n3 = document.getElementById("n3").value;
//   var n4 = document.getElementById("n4").value;

//   var table = `<tr>
//            <td>${n1}</td>
//            <td>${n2}</td>
//            <td>${n3}</td>
//            <td>${n4}</td>
//            </tr>`

//     document.getElementById("data").innerHTML += table;
//   // document.getElementById("data").innerHTML += table;
//   myform.reset();
// }








