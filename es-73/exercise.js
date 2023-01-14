const printAsyncName = (callback, name) => {
  setTimeout(callback, 1000);
  setTimeout(() => {
    console.log(name);
  }, 2000);
};

const callback = () => {
  console.log("Hello");
};

printAsyncName(callback, "Marco");
