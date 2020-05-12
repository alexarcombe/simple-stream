import streamAPI from '../apis/streamsAPI';
import history from '../history';
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from './types';

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await streamAPI.post('/streams', { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: res.data });
  history.push('/');
};

export const fetchStreams = () => async (dispatch) => {
  const res = await streamAPI.get('/streams');
  dispatch({ type: FETCH_STREAMS, payload: res.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const res = await streamAPI.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: res.data });
};

export const editStream = (id, changes) => async (dispatch) => {
  const res = await streamAPI.patch(`/streams/${id}`, { ...changes });
  dispatch({ type: EDIT_STREAM, payload: res.data });
  history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
  await streamAPI.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
