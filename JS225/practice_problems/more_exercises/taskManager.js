// You are tasked with creating a simple web-based task management system using Object-Oriented JavaScript. The system should allow users to create new tasks, mark tasks as completed, and display tasks in a filtered manner.

// Task Object: Create a Task object to represent individual tasks. Each task should have a title, a boolean status to indicate if it's completed, and a unique identifier.

// TaskManager Object: Implement a TaskManager object. This object should be responsible for managing a collection of tasks. It should provide functionality to add tasks, mark tasks as completed, and retrieve tasks.

// Private Data: Ensure that the internal list of tasks in the TaskManager is private and not directly accessible from outside the TaskManager object.

// IIFE (Immediately Invoked Function Expression): Use an IIFE to encapsulate the code that initializes your application, to avoid polluting the global scope.

// Object Creation Patterns: Utilize different object creation patterns (like Constructor Pattern, Factory Pattern, etc.) where appropriate.

// Function Execution Contexts: Demonstrate understanding of function execution contexts, especially this, in your methods.

// Filter Functionality: Add functionality to filter tasks (all, completed, pending).

const Task = (function() {
  let usedIds = [];
  const randomChar = function() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  const length = chars.length;
  let randomIdx = Math.floor(Math.random() * length);
  return chars[randomIdx];
  }

  const generateId = function() {
    let id = '';

    do {
      for (let i = 0; i < 6; i += 1) {
        id += randomChar();
      }
    } while (usedIds.includes(id));

    return id;
  }

  return function(title, completed) {
    this.title = title;
    this.completed = completed;
    this.identifier = generateId();
  }
})();



function createTaskManager() {
  let TaskManager = (function() {
    let taskList = [];
    return {
      addTask(title, completed) {
        let newTask = new Task(title, completed);
    
        taskList.push(newTask);
        return newTask;
        },
      
      showTasks() {
        console.log(taskList);
      },
  
      getTask(title) {
        let task = taskList.filter(task => task.title === title)[0];
        
        return task;
      },
  
      completeTask(title) {
        let task = this.getTask(title);
        
        if (task) {
          task.completed = true;
          return true;
        } else {
          console.log('invalid task');
        }
      },
  
      showCompleted() {
        let completed = taskList.filter(task => {
          return task.completed === true
        })
        
        if (completed) {
          completed.forEach(task => console.log(task.title));
        } else {
          console.log('no completed tasks yet');
        }
        
      },
  
      showPending() {
        let pending = taskList.filter(task => !task.completed);
  
        pending.forEach(task => console.log(task.title));
      },
  
      removeTask(title) {
        let idx;
        
        taskList.forEach((task, index) => {
          if (task.title === title) {
            idx = index;
          }
        });
  
        if (idx !== undefined) {
          taskList.splice(idx, 1);
          return true;
        } else {
          console.log('invalid task')
        }
      }
    }
  })();
  return TaskManager
}


const taskManager1 = createTaskManager();
taskManager1.addTask('go for a run', false);
taskManager1.addTask('clean the house', false);
taskManager1.addTask('feed the birds', false);

taskManager1.showTasks() // [{...}]
console.log(taskManager1.taskList) // undefined


console.log(taskManager1.completeTask('wash the dishes')) // invalid task
console.log(taskManager1.completeTask('go for a run')); // true
taskManager1.showCompleted() // 'go for a run'

taskManager1.showPending() // 'clean the house' 'feed the birds'

taskManager1.removeTask('clean the car') // invalid task
taskManager1.removeTask('clean the house') // true;

taskManager1.showTasks() // [{go for a run... } {feed the birds...}]


let taskManager2 = createTaskManager()
taskManager2.addTask('run to the hill', false);
taskManager2.addTask('break the law', false)

taskManager2.showTasks();