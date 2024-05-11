export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK_COMPLETE = 'TOGGLE_TASK_COMPLETE';


let nextTaskId = 1;

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: {
      ...task,
      id: nextTaskId++,
    },
  };
};

export const updateTask = (task) => {
  return {
    type: UPDATE_TASK,
    payload: task,
  };
};


export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};


export const toggleTaskComplete = (taskId) => {
  return {
    type: TOGGLE_TASK_COMPLETE,
    payload: taskId,
  };
};