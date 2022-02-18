import { takeLatest } from 'redux-saga/effects';
import { topNewsSaga, anyNewsSaga, sourceNewsSaga } from './newsSaga';
import * as types from '../constants/actionTypes';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* watchSearchNews() {
  yield takeLatest(types.SEARCH_ANY_NEWS_REQUEST, anyNewsSaga);
  yield takeLatest(types.SEARCH_TOP_NEWS_REQUEST, topNewsSaga);
  yield takeLatest(types.SEARCH_SOURCES_NEWS_REQUEST, sourceNewsSaga);
}
