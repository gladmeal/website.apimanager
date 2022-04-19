import { createSlice } from "@reduxjs/toolkit";

export const profile = createSlice( {
    name: 'profile',
    initialState: {
        token: localStorage.getItem( 'token' ) || '',
        name: '',
        role: 0,
        email: ''
    },
    reducers: {
        setProfile( state, action ) {
            localStorage.setItem( 'token', action.payload.token );
            return {
                ...state,
                ...action.payload
            };
        },
        setToken( state, action ) {
            localStorage.setItem( 'token', action.payload );
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