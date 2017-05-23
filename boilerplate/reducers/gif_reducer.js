import { RECEIVE_GIF } from '../actions/project_actions';
import merge from 'lodash/merge';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_GIF:
      return action.gif;
    default:
      return state;
  }
};

export default ProjectsReducer;
