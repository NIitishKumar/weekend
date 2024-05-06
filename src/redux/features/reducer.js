import { FILTER_JOBS, JOB_LISTING, JOB_LISTING_FAILED, JOB_LISTING_SUCCESS } from "./actions"

let initState = {
    dataList: [],
    hasMore: true,
    isLoading: false,
    currentPage: 0,
}

export default function (state = initState, action) {

    switch (action.type) {
        case JOB_LISTING:
            return { ...state, isloading: true }

        case JOB_LISTING_SUCCESS:
            if (state?.dataList?.length > 947) {
                state.hasMore = false
            }
            return { ...state, dataList: [...action.listing, ...state.dataList], isloading: false, currentPage: state.currentPage + 1 }

        case JOB_LISTING_FAILED:
            return { ...state, isloading: false };

        case FILTER_JOBS:
            if (state.dataList[0][action.filter] || action.filter == "remote") {
                if (action.filter == "remote") {
                    state.dataList = state.dataList.sort((a, b) => {
                        if (a.location === "remote") {
                            return -1;
                        } else if (b.location === "remote") {
                            return 1;
                        } else {
                            return 0;
                        }
                    });
                } else {
                    if (typeof (state.dataList[0][action.filter]) == "number") {
                        state.dataList = state.dataList?.sort((a, b) => a[action.filter] - b[action.filter]);
                    } else {
                        state.dataList = state.dataList.sort((a, b) => a[action.filter]?.localeCompare(b[action.filter]));
                    }
                }
            }
            return { ...state, }

        default:
            return state
    }

}