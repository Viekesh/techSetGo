import { configureStore, createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        },
    },
});

export const authAction = authSlice.actions

export const store = configureStore({
    reducer: authSlice.reducer
});








// Here we are implement our redux toolkit
// Redux is a central data store which is available thought the application
// So we will have whole data store in this file only

// Toolkit allows us to create a slices of redux states so we for this reason we import
// {createSlice} from @react/toolkit

// Now we can use {createSlice} in authSlice, then createSlice have some functions such
// as name of the slice ("auth") means it will be the auth slice
// Then we can have the initial state into the createSlice as well so the initialState would
// be then there and then we need to specify a property and this is ("isLoggedIn"), so the
// initial state is false of this logged in and after that then we can specify one more thing
// in the initial state it will be the reducers


// In redux, a reducer is a pure function that takes an action and the previous state of the
// application and returns the new state
// The action describes what happened and it is the reducers job to return the new state
// based on that action.


// Now we need to specify the reducer function inside authSlice
// So for the reducer function we can specify two reducer fuction which can be a login
// until logout ( "login() {}, logout() {}" )
// Both of this functions will be then having the access to the state of the redux we can
// add a state to their parameters as well

// Then in the login we will just mutate the state.isLoggedIn property will be
// equal to the true and in the logout state.isLoggedIn property set to the false, now the
// slice of the authentication will be complete and now we need to export the store

// For exporting the store we need to export the reducer functions of the store, which will
// handle the state of the redux, so for handling this we need to create the new variable at
// the store and then it will be having the configure store which will just configure the store
// for us and then the configure store will be then also imported from the redux toolkit
// and then it will be having a property of the reducers, so now we need to specify the reducer
// and now if you have only a single reducer then you can specify like this ("reducer: authSlice.reducer")
// But if you have multiple reducers then you can create here an object and then you
// can just define the reducers with the key value pair but now we have only single reducer here,
// so we can just specify the reducer as the "authSlice.reducer"

// Now we need to call action creaters as well, so these are action creators...

// login(state) {
    // state.isLoggedIn = true
// },
// logout(state) {
    // state.isLoggedIn = false
// },

// So we need to call here the action creators as well so we need to import the actions that
// will be the auth actions will be equal to the authSlice.actions

// So now we implemented the redux functionality into our application

// Now to implement the redux throughout the app component, we need to wrap the app component
// into the index.js, inside the src folder or outside the projects folder

// To wrap the app component with the redux we need to import provider so we need to add the
// provider from the react-redux that we have install earlier

// provider component provides us state to a component 