import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import actions from '../actions'

const END_POINT = "http://localhost:5000/"

/****************Showtime Cpanel*****************/
// List
function asyncShowtimeList() {
    return axios.get(END_POINT + 'showtime')
        .then(response => response)
        .catch((e) => console.log(e));
}
export function* actionShowtimeList() {
    const response = yield call(asyncShowtimeList);

    yield put(actions.ShowtimeListAsync(response.data.payload))
}

// Add
function asyncShowtimeAdd(showtime) {
    return axios.post(END_POINT + 'showtime', { showtime })
        .then(response => response)
        .catch((e) => console.log(e));
}
export function* actionShowtimeAdd(data) {
    const { payload } = data
    const response = yield call(asyncShowtimeAdd, payload);

    yield put(actions.ShowtimeAddAsync(response.data))
}

// Update
function asyncShowtimeUpdate(showtime) {
    console.log(showtime)
    return axios.put(END_POINT + 'showtime', { showtime })
        .then(response => response)
        .catch((e) => console.log(e));
}
export function* actionShowtimeUpdate(data) {
    const { payload } = data;
    const response = yield call(asyncShowtimeUpdate, payload);
    
    yield put(actions.ShowtimeUpdateAsync(response.data))
}

// Delete
function asyncShowtimeDelete(payload) {
    const { id } = payload;
    if (!id) return false;

    return axios.delete(END_POINT + 'showtime/' + id)
        .then(response => response)
        .catch((e) => console.log(e));
}
export function* actionShowtimeDelete(data) {
    const { payload } = data
    const response = yield call(asyncShowtimeDelete, payload);

    yield put(actions.ShowtimeDeleteAsync(response.data))
}