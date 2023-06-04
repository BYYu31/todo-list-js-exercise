// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
// }

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(tasks) {
//   tasks.complete = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(tasks) {
//   console.log(`${tasks.title} has${tasks.complete ? " " : " not "}been completed`);
// }

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter"); // task 0
const task2 = newTask("Do Laundry"); // task 1
const tasks = [task1, task2];


task1.logTaskState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logTaskState(); // Clean Cat Litter has been completed
task1.title;
task1.markCompleted();

// console.log(tasks);
