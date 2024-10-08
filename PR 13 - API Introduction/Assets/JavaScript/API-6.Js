var button2 = document.querySelector("#retrieve");
button2.addEventListener("click", userDataHandler);

function userDataHandler() {
  const xhr = new XMLHttpRequest();
  const fetchURL = `https://jsonplaceholder.typicode.com/posts`;
  xhr.open("GET", fetchURL, true);

  xhr.onprogress = function () {
    console.log(`Fetching In Progress!`);
  };

  xhr.onload = function () {
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
  const userList = document.querySelector("#called-list");
  userList.innerHTML = ``;

  randomUsers.forEach((user) => {
    let userDiv = document.createElement("div");
    userDiv.classList.add("user-card");

    console.log(user.id);
    userDiv.innerHTML = `
        <h3>${user.id}</h3>
        <p>${user.title}</p>
            `;
    userList.appendChild(userDiv);
  });
}
