const TodoList = require("../src/TodoList.js");

describe("TodoList", () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it("creates a todo item", () => {
    // set up
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
    };
    // execute
    const result = todoList.create("turn the heating on!");
    // verify
    expect(result).toEqual(expected);
  });

  it("get all todo items", () => {
    // set up
    // const expected = [
    //   {
    //     id: 1,
    //     text: "Open the windows",
    //     status: "incomplete",
    //   },
    //   {
    //     id: 2,
    //     text: "Feed the cats",
    //     status: "incomplete",
    //   },
    //   {
    //     id: 3,
    //     text: "Take free time",
    //     status: "incomplete",
    //   },
    // ];
    const one = {
      id: 1,
      text: "Open the windows",
      status: "incomplete",
    };
    const two = {
      id: 2,
      text: "Feed the cats",
      status: "incomplete",
    };
    const three = {
      id: 3,
      text: "Take free time",
      status: "incomplete",
    };
    const expected = [one, two, three];

    // execute
    todoList.create("Open the windows");
    todoList.create("Feed the cats");
    todoList.create("Take free time");

    const result = todoList.getAll();
    // verify
    expect(result).toEqual(expected);
  });
  it("set a todo completed by its ID", () => {
    // set up
    const expected = {
      id: 1,
      text: "Learn some code!",
      status: "complete",
    };
    // execute
    todoList.create("Learn some code!");
    const result = todoList.todoCompleted(1);
    // verify
    expect(result).toEqual(expected);
  });
  it("get only todo items that are incomplete", () => {
    // set up
    const expected = [
      {
        id: 1,
        text: "Learn some code!",
        status: "incomplete",
      },
    ];
    // execute
    todoList.create("Learn some code!");
    const result = todoList.getIncomplete();
    // verify
    expect(result).toEqual(expected);
  });
  it("get only todo items that are complete", () => {
    // set up
    const expected = [
      {
        id: 1,
        text: "Learn some code!",
        status: "complete",
      },
    ];
    // execute
    todoList.create("Learn some code!");
    todoList.todoCompleted(1);
    const result = todoList.getComplete();
    // verify
    expect(result).toEqual(expected);
  });
  it("search and return a todo item by its ID, or return a message saying it doesn’t exist", () => {
    // set up
    const expected = {
      id: 1,
      text: "Learn some code!",
      status: "incomplete",
    };

    // execute
    todoList.create("Learn some code!");
    todoList.create("Learn code!");
    todoList.create("Learn !");
    const result = todoList.searchReturn(1);
    // verify
    expect(result).toEqual(expected);
  });
  it("remove a todo item by its ID", () => {
    // set up
    (one = {
      id: 1,
      text: "water the plants",
      status: "incomplete",
    }),
      (two = {
        id: 2,
        text: "Feed the cats",
        status: "incomplete",
      });
    const expected = [one, two];

    // execute
    todoList.create("Learn some code!");
    todoList.create("Learn code!");
    todoList.create("Learn !");
    const result = todoList.removeitem();
    // verify
    expect(result).toEqual(expected);
  });
});
