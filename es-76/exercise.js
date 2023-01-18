const number = 15;
let promise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve("risolto");
  } else {
    reject("errore");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
