// Validating the Form Data
function validateForm(myForm) {
  const errorMsgElements = document.querySelectorAll(".errorMsg");
  errorMsgElements.forEach((el) => (el.innerHTML = ""));

  if (!myForm || !myForm.elements) {
    console.error("Form Not Found or Invalid Input.");
    return false;
  }

  let fname = myForm.fname.value.trim();
  let age = myForm.age.value.trim();
  let address = myForm.address.value.trim();
  let email = myForm.email.value.trim();

  let flag = true;

  const errorMessages = {
    fname: "Please enter your Name Correctly.",
    age: "Please enter a valid age.",
    address: "Please enter your address.",
    email: "Please enter a valid email address.",
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const ageRegex = /^[0-9]+$/;

  if (fname === "") {
    flag = false;
    document.querySelector("#fnameError").innerHTML = errorMessages.fname;
  }

  if (age === "" || !ageRegex.test(age)) {
    flag = false;
    document.querySelector("#ageError").innerHTML = errorMessages.age;
  }

  if (address === "") {
    flag = false;
    document.querySelector("#addressError").innerHTML = errorMessages.address;
  }

  if (email === "" || !emailRegex.test(email)) {
    flag = false;
    document.querySelector("#emailError").innerHTML = errorMessages.email;
  }

  return flag;
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
      `<td><button type="button" onclick="editData(` +
      index +
      `)" class="btn btn-warning">Edit</button>
      <button type="button" onclick="deleteData(` +
      index +
      `)" class="btn btn-danger">Delete</button>
      </td>`;
    html += "</tr>";
  });

  document.querySelector("#crudTable tbody").innerHTML = html;
}
// Load the data while loading the page
window.onload = showData;

// Function to add data in local storage
function addData() {
  const myForm = document.getElementById("myForm");

  if (validateForm(myForm) == true) {
    let fname = myForm.fname.value.trim();
    let age = myForm.age.value.trim();
    let address = myForm.address.value.trim();
    let email = myForm.email.value.trim();

    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.push({
      name: fname,
      age: age,
      address: address,
      email: email,
    });

    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();

    myForm.fname.value = "";
    myForm.age.value = "";
    myForm.address.value = "";
    myForm.email.value = "";
  }
}

// function to delete data from local storage
function deleteData(index) {
  try {
    var peopleList;

    if (localStorage.getItem("peopleList") == null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));

    showData();
  } catch (error) {
    console.error("Error while deleting data:", error);
  }
}

// function to Edit/Update data from local storage
function editData(index) {
  document.getElementById("submit").style.display = "block";
  document.getElementById("updateData").style.display = "none";

  try {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
      peopleList = [];
    } else {
      try {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
      } catch (error) {
        console.error("Error parsing localStorage data", error);
        peopleList = [];
      }
    }

    if (index >= 0 && index < peopleList.length) {
      var myForm = document.forms["myForm"];

      myForm.fname.value = peopleList[index].name;
      myForm.age.value = peopleList[index].age;
      myForm.address.value = peopleList[index].address;
      myForm.email.value = peopleList[index].email;

      document.getElementById("updateData").onclick = function () {
        if (validateForm(myForm) === true) {
          peopleList[index].name = myForm.fname.value;
          peopleList[index].age = myForm.age.value;
          peopleList[index].address = myForm.address.value;
          peopleList[index].email = myForm.email.value;

          localStorage.setItem("peopleList", JSON.stringify(peopleList));
          showData();

          document.getElementById("submit").style.display = "none";
          document.getElementById("updateData").style.display = "block";
        }
      };
    } else {
      console.error("Invalid index provided for editing.");
    }
  } catch (error) {
    console.error("Error while Editing data!", error);
  }
}

function getRecords() {
  const peopleList = localStorage.getItem("peopleList");
  return peopleList ? JSON.parse(peopleList) : [];
}

function searchRecords() {
  const query = document.getElementById("search").value.toLowerCase();
  const peopleList = getRecords();

  const filteredRecords = peopleList.filter(
    (record) =>
      record.name.toLowerCase().includes(query) ||
      record.address.toLowerCase().includes(query) ||
      record.email.toLowerCase().includes(query) ||
      record.age.toString().includes(query)
  );

  const recordList = document.getElementById("recordList");
  recordList.innerHTML = "";

  if (filteredRecords.length === 0) {
    recordList.innerHTML = `<tr><td colspan="5">No records found</td></tr>`;
    return;
  }

  // Populate the filtered records into the table
  filteredRecords.forEach((record, index) => {
    recordList.innerHTML += `
      <tr>
        <td>${record.name}</td>
        <td>${record.age}</td>
        <td>${record.address}</td>
        <td>${record.email}</td>
        <td>
          <button class="btn btn-danger" onclick="editRecord(${peopleList.indexOf(
            record
          )})">Edit</button>
          <button class="btn btn-warning" onclick="deleteData(${peopleList.indexOf(
            record
          )})">Delete</button>
        </td>
      </tr>`;
  });
}

function clearForm() {
  document.querySelector("#myForm").reset();
}
