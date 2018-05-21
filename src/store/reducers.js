import {
  SET_USER,
  UPDATE_USER,
  REMOVE_USER,
  GET_TASKS,
  GET_INFO,
  REMOVE_TASK
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

    case REMOVE_TASK: {
      const updateState = state.map(day => day.filter(el => el.id !== data.id));
      return updateState;
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
