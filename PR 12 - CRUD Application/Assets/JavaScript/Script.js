function validateForm() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var address = document.getElementById("address").value;
  var email = document.getElementById("email").value;

  if (name == "") {
    alert(`Name field should not be empty!`);
    return;
  }

  if (age == "") {
    alert(`Age field should not be empty!`);
    return;
  }

  if (age <= 0) {
    alert(`Age must be Greater then 0`);
    return;
  }

  if (address == "") {
    alert(`Address field should not be Empty!`);
    return;
  }

  if (email == "") {
    alert(`eMail field should not be empty!`);
    return;
  } else if (!email.includes("@")) {
    alert("Invalid eMail address!");
    return;
  }

  return true;
}
function showData() {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  var html = "";

  peopleList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.age + "</td>";
    html += "<td>" + element.address + "</td>";
    html += "<td>" + element.email + "</td>";
    html +=
      `<td><button type="button" onclick="deleteData(` +
      index +
      `)" class="btn btn-danger">Delete</button></td>`;
  });
}
