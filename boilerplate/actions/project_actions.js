import * as APIUtil from '../util/projects_api_util';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const scrapeProject = () => dispatch => (
  APIUtil.scrapeProjects()
    .then((projects) => (dispatch(receiveProject(projects))))
    .fail((errors) => (dispatch(receiveErrors(errors.responseJSON))))
);

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});
