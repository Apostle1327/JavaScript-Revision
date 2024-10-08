// Git API Card.

var button = document.querySelector("#retrieve");
button.addEventListener("click", dataHandler);

function dataHandler() {
  const xhr = new XMLHttpRequest();
  const fetchURL = `https://api.github.com/users/Apostle1327`;
  xhr.open("GET", fetchURL, true);

  xhr.onprogress = function () {
    console.log(`On Progress`);
  };

  xhr.onload = function () {
    console.log(this.status);
    if (this.status == 200 || this.status == 201) {
      const user = JSON.parse(this.responseText);
      console.log(user);
      displayData(user);
    } else {
      console.log(`No Data Found!`);
    }
  };
  xhr.send();
}

function displayData(user) {
  const userList = document.querySelector("#called-list");
  userList.innerHTML = ``;

  let dataDiv = document.createElement("div");
  dataDiv.classList.add("data-card");

  dataDiv.innerHTML = `
    <h3>"Git username : ${user.login}"</h3>
    <p>"Git Display Name : ${user.name}"</p>
  `;

  userList.appendChild(dataDiv);
}

// Random user API Card.

var button2 = document.querySelector("#retrieve2");
button2.addEventListener("click", userDataHandler);

function userDataHandler() {
  const xhr = new XMLHttpRequest();
  const fetchURL = `https://jsonplaceholder.typicode.com/users`;
  xhr.open("GET", fetchURL, true);

  xhr.onprogress = function () {
    console.log(`Fetching In Progress!`);
  };

  xhr.onload = function () {
    console.log(this.status);
    if (this.status == 200 || this.status == 201) {
      const randomUsers = JSON.parse(this.responseText);
      processData(randomUsers);
    } else {
      console.log(`No Data Found!`);
    }
  };
  xhr.send();
}

function processData(randomUsers) {
  const userList = document.querySelector("#retrieved-list");
  userList.innerHTML = ``;

  randomUsers.forEach((user) => {
    let userDiv = document.createElement("div");
    userDiv.classList.add("user-card");

    userDiv.innerHTML = `

            <h3>${user.name}</h3>
            <p>${user.username}</p>
            `;
    userList.appendChild(userDiv);
  });
}
