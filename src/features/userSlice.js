import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postUserData: [],
    getStoreUserData: [],
    deleteUserData: [],
    postData: false,
    getData: false,
    updateData: [],
    searchDatas: [],
    error: null,
}

export const userDetail = createSlice({
    name: "userDetail",
    initialState,
    reducers: {
        postDataRequest: (state) => {
          state.postData = false;
          state.error = null;
        },
        postDataSuccess: (state, action) => {
          state.postData = true;
          state.postUserData = action.payload
        },
        postDataFailure: (state, action) => {
          state.postData = false;
          state.error = action.payload;
        },
        getDataRequest: (state) => {
            state.getData = true
        },
        getDataSucess: (state, action) => {
            state.getData = false
            state.getStoreUserData = action.payload
        },
        storeDeleteUser: (state, action) => {
            state.deleteUserData = action.payload
            const index = state.getStoreUserData.findIndex(item => item.id === action.payload.id);
            state.getStoreUserData.splice(index,1)
        },
        updateUserData: (state, action) => {
            state.updateData = action.payload
        },
        updateUserDataSuccess: (state, action) => {
            const index = state.getStoreUserData.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.getStoreUserData[index] = action.payload;
            }
        },
        searchUserData: (state, action) => {
            state.searchDatas = action.payload
        }
      },
})

export const {postDataFailure, postDataRequest, postDataSuccess, getDataRequest, getDataSucess, storeDeleteUser, updateUserData, updateUserDataSuccess, searchUserData} = userDetail.actions


export const postUserData = (data) => async (dispatch) => {
    dispatch(postDataRequest())
    try {
        const response = await fetch('https://664e25e0fafad45dfadf3357.mockapi.io/Blog_crud', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        dispatch(postDataSuccess(responseData))
    } catch (error) {
        dispatch(postDataFailure())
    }
};

export const getUserData = () => (dispatch) =>{
    dispatch(getDataRequest())
    try {
        fetch('https://664e25e0fafad45dfadf3357.mockapi.io/Blog_crud')
        .then((res) => res.json())
        .then((res) => dispatch(getDataSucess(res)))
    } catch (error) {
        console.log(`error in getuserData ${error}`);
    }
}


export const deleteUser = (id) => (dispatch) =>{
    try {
        fetch(`https://664e25e0fafad45dfadf3357.mockapi.io/Blog_crud/${id}`, {
            method: 'delete'
        })
        .then((res) => res.json())
        .then((res) => dispatch(storeDeleteUser(res)))
    } catch (error) {
        console.log(`error in deleteUser ${error}`);
    }
}

export const updateUser = () => async (dispatch, getState) => {
    const {updateData} = getState().appState
    try {
        const response = await fetch(`https://664e25e0fafad45dfadf3357.mockapi.io/Blog_crud/${updateData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        });
        const responseData = await response.json();
        dispatch(updateUserDataSuccess(responseData))
    } catch (error) {
        console.log(`error in updateUser ${error}`);
    }
};

export default userDetail.reducer;