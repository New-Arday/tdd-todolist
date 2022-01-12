class TodoList {
  constructor() {
    this.list = [];
    this.id = 1;
  }
  create(instructions) {
    const todo = {
      id: this.id,
      text: instructions,
      status: "incomplete",
    };
    this.list.push(todo);
    this.id++;
    return todo;
  }
  getAll() {
    return this.list;
  }
  todoCompleted(id) {
    this.list[id - 1].status = "complete";
    return this.list[id - 1];
  }
  getIncomplete() {
    const arr = [];
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].status === "incomplete") {
        arr.push(this.list[i]);
      }
    }
    return arr;
  }
  getComplete() {
    const arr = [];
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].status === "complete") {
        arr.push(this.list[i]);
      }
    }
    return arr;
  }
  searchReturn(id) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        return this.list[i];
      }
    }
    return "It doesn't exist";
  }
  removeitem(id) {
    const removeItem = [];
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        removeItem.splice([i], 1);
      }
    }
    return removeItem;
  }
}
module.exports = TodoList;
/*
Create a todo item that has an ID, text description, and starts off incomplete - DONE!
Get all todo items - DONE!
Set a todo completed by its ID -DONE!
Get only todo items that are incomplete -DONE!
Get only todo items that are complete -Done 
Search and return a todo item by its ID, or return a message saying it doesn’t exist
Remove a todo item by its ID
*/
