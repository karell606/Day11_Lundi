function asyncFunc() {
  return Promise.resolve("Hello World !");
}
 
asyncFunc().then(console.log);
