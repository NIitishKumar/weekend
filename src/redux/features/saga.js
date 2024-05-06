import { put, takeLatest } from "redux-saga/effects";
import { JOB_LISTING, JOB_LISTING_FAILED, JOB_LISTING_SUCCESS } from "./actions";
import request from "../../services/request";

function* getListing(action){
    try {
        const payload = JSON.stringify(action.state);
        const data = yield request(
            "POST",
            "https://api.weekday.technology/adhoc/getSampleJdJSON",
            payload
        )
        yield put({type:JOB_LISTING_SUCCESS, listing : data?.data?.jdList})
    } catch (error) {
        yield put({type:JOB_LISTING_FAILED, errorMessage : "Failed to get data!"})
    }
}

export default function* features() {
    yield takeLatest(JOB_LISTING, getListing)
}