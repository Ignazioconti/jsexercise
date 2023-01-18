const isLogged = true;

let promise1 = new Promise((resolve, reject) => {
  if (isLogged) {
    let randomNumber = Math.random();
    resolve(randomNumber);
  } else {
    reject(new Error("Offline"));
  }
});

let promise2 = (number) =>
  new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Number not 0.5"));
    }
  });

promise1
  .then((result) => promise2(result))
  .then((finalResult) => console.log(finalResult))
  .catch((error) => console.error(error))
  .finally(() => console.log("completed"));
