import {
  SET_USER,
  UPDATE_USER,
  REMOVE_USER,
  GET_TASKS,
  UPDATE_TASKS,
  GET_INFO,
  REMOVE_TASK,
  CREATE_TASK,
  SET_ERROR
} from './actions';


export const user = (state = false, { type, data }) => {
  switch (type) {
    case UPDATE_USER:
    case SET_USER: {
      return data;
    }

    case REMOVE_USER:
      return null;
  }

  return state;
};

export const taskList = (state = [], { type, data }) => {
  switch (type) {
    case GET_TASKS: {
      return data || state;
    }

    case UPDATE_TASKS: {
      const newState = [...state];
      const index = newState[data.day].findIndex(el => el.id === data.id);
      newState[data.day][index] = data;
      return newState;
    }

    case REMOVE_TASK: {
      return state.map(day => day.filter(el => el.id !== data.id));
    }
  }

  return state;
};

export const information = (state = {}, { type, data }) => {
  switch (type) {
    case GET_INFO: {
      return data;
    }
  }

  return state;
};


export const error = (state = '', { type, data = '' }) => {
  switch (type) {
    case SET_ERROR:
      return data;
  }
  return state;
};
