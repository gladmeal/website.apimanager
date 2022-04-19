import { createSlice } from "@reduxjs/toolkit";

export const profile = createSlice( {
    name: 'profile',
    initialState: {
        token: '',
        name: '',
        role: 0,
        email: ''
    },
    reducers: {
        setProfile( state, action ) {
            return {
                ...action.payload
            };
        },
        setToken( state, action ) {
            return {
                ...state,
                token: action.payload
            };
        },
        setRole( state, action ) {
            return {
                ...state,
                role: action.payload
            };
        }
    }
} );

export default profile.reducer;
export const { setProfile, setToken, setRole } = profile.actions;
export function getState( state ) {
    return state;
};