function worker(task, timeRequired) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(task + " done");
    }, timeRequired);
  });
}
 
async function factory(tasks) {
  for (const { task, timeRequired } of tasks.tasks) {
    const result = await worker(task, timeRequired);
    console.log(result);  
  }
  console.log("All tasks completed.");  
}
 
let tasks = {
  tasks: [
    { task: 'Teaching Astronomy', timeRequired: 500 },
    { task: 'Going to work', timeRequired: 1000 },
    { task: 'Repair module', timeRequired: 1000 },
    { task: 'Refill fuel', timeRequired: 1500 },
  ],
};
 
 
factory(tasks);
