const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage() {
  localStorage.setItem("user", JSON.stringify(user));
}

function returnUserFromLocalStorage() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user !== null) {
    console.log(user);
  } else {
    console.log("no localstorage");
  }
}
