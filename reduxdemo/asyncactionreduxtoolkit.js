const {configureStore, createSlice} = require('@reduxjs/toolkit')
// const thunkMiddleware = require('redux-thunk').default 
const axios = require('axios')
const initialState  ={
    loading:false,
    users:[],
    error:''
}
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        fetchUserRequest:(state)=>{
            state.loading = true;
        },
        fetchUsersSuccess:(state,action)=>{
            state.loading = false,
            state.users= action.payload,
            state.error=''
        },
        fetchUsersFailure :(state,action)=>{
            state.loading = false, 
            state.users = [],
            state.error = action.payload

        }
    }
})

const {fetchUserRequest,fetchUsersFailure,fetchUsersSuccess} = userSlice.actions;

const fetchUsers = () =>{
    return async (dispatch)=>{
        dispatch(fetchUserRequest());
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        }catch(error){
            dispatch(fetchUsersFailure(error.message))
        }
    }
}

const store = configureStore({
    reducer : userSlice.reducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
})

store.subscribe(()=>console.log(store.getState()));
store.dispatch(fetchUsers())