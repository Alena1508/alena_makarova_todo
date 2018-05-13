import {
  SET_USER,
  UPDATE_USER,
  REMOVE_USER,
  ADD_TASK,
  GET_TASKS
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
    case ADD_TASK: {
      return state.map((day) => {
        if (day === data.day) {
          return [...day, data];
        }
        return day;
      });
    }


    case GET_TASKS: {
      return data || state;
    }
  }

  return state;
};
