import { createSlice } from "@reduxjs/toolkit";

export const profile = createSlice( {
    name: 'profile',
    initialState: {
        token: '',
        name: '',
        role: 0,
        email: '',
        isConnected: false
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
        },
        setConnected( state, action ) {
            return {
                ...state,
                isConnected: action.payload
            };
        }
    }
} );

export default profile.reducer;
export const { setProfile, setToken, setRole, setConnected } = profile.actions;
export function getState( state ) {
    return state;
};