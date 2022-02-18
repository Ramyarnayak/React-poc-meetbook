import * as types from '../constants/actionTypes';

export const searchTopNewsAction = () => ({
    type: types.SEARCH_TOP_NEWS_REQUEST,
  });

export const searchAnyNewsAction = (payload) => ({
  type: types.SEARCH_ANY_NEWS_REQUEST,
  payload
});

export const searchSourceNewsAction = (payload) => ({
  type: types.SEARCH_SOURCES_NEWS_REQUEST,
  payload
});

