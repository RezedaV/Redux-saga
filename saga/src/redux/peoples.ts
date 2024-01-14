import { createSlice} from "@reduxjs/toolkit";
import {TPeoplesState} from "../types/TypesPeoples";

const initialState: TPeoplesState = {
    page: 1,
    search: '',
    list: {}
};
const peoplesSlice = createSlice({
    name: 'peoples',
    initialState,
    reducers: {
        loadPeoples: (state = initialState, action)=> {
            const {page, search} = action.payload

            return {
                ...state,
                page,
                search,
            }
        },
        getPeoplesSuccess: (state, action) => {
            state.list = action.payload;
        },
    }
});

export const { loadPeoples, getPeoplesSuccess } = peoplesSlice.actions;

export default peoplesSlice.reducer;
