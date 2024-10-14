function promiseMe(promise) {
  return Promise.resolve("I promise you to" + promise);
}
 
function checkStatus(machine) {
  machine
    .then((message) => console.log(message))  
    .catch((error) => console.log(error))     
    .finally(() => console.log("Checking status over"));  
}
 
checkStatus(promiseMe(" fly to the moon"));
