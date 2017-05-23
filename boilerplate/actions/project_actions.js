import * as APIUtil from '../util/projects_api_util';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECIEVE_GIF = 'RECIEVE_GIF';

export const scrapeProject = () => dispatch => (
  APIUtil.scrapeProjects()
    .then((gif) => (dispatch(receiveGif(gif))))
    .fail((errors) => (dispatch(receiveErrors(errors.responseJSON))))
);

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveGif = gif => ({
  type: RECIEVE_GIF,
  gif
});
