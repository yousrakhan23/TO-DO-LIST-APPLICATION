#! /usr/bin/env node

import chalk from "chalk";

import inquirer from "inquirer";

let todoList: string [] = [];  // [] these brackests looks like a shopping bag
let conditions = true;

 // print welcome message 
 console.log(chalk.bgBlueBright(`\n \t\t <<<******************************>>>`));
 console.log(chalk.bold.red(`\n \t\tWELCOME TO MY TODO LIST APPLICATION`));
 console.log(chalk.bgBlueBright(`\n \t\t <<<******************************>>>`));

let main = async () => {
  while (conditions){
    let option = await inquirer.prompt([
      {
       name: "choice",
       type: "list",
       message: "Selct an option you want to do:",
       choices: ["Add Task", "Delete Task","Update Task","View To Do list","Exit"],
      }
    ]);
    if(option.choice === "Add Task"){
       await addTask()
    }
    else if(option.choice === "Delete Task"){
      await deleteTask()
    }
    else if(option.choice === "Update Task"){
      await updateTask()
    }
    else if(option.choice === "View To Do list"){
      await viewTask()
    }
    else if(option.choice === "Exit"){
      conditions = false;
    }
  }
}

// Functioning to add new task to the list 

let addTask = async () => {
  let newTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter your new task"
    }
  ]);
  todoList.push(newTask.task);
  console.log(`\n ${newTask.task} task added successfully in To Do list`);

}

   // Functioning to view all To Do list tasks

let viewTask = () => {
  console.log("\n Your TO DO List: \n");
  todoList.forEach((task, index) => {
    console.log(`${index + 1}: ${task}`)
  })
}

// Functioning to delete a task from the list 
let deleteTask = async () => {
  await viewTask()
  let taskIndex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the 'index no.' of the task you want to delete:",
    }
  ]);
  let deletedTask = todoList.splice(taskIndex.index - 1, 1);
  console.log(`\n ${deletedTask} this task has been deleted successfully from your To Do list \n`);
}
 // functioning to update task 
 let updateTask = async () => {
  await viewTask()
  let update_task_index = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the 'index no.' of the task you want to update:"

    },
    {
      name: "new_task",
      type: "input",
      message: "Now Enter new task name:",
    }
  ]);
  todoList[update_task_index.index - 1 ] = update_task_index.new_task
  console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully
             [for updated list check option: "view To Do list" ]`)
 }
main();


















