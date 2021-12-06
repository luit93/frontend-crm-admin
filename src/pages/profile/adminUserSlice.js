import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  response: {},
  adminProfile: {},
};

const adminUserSlice = createSlice({
  name: "adminUser",
  initialState,

  reducers: {
    isPending: (state) => {
      state.isLoading = true;
    },
    requestSuccess: (state) => {
      state.isLoading = false;
    },
    getProfileSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.adminProfile = payload;
    },
    requestFailed: (state) => {
      state.isLoading = false;
    },
    adminLoggedIn: (state) => {
      console.log("sdfdsf");
      state.isAuth = true;
      state.isLoading = false;
    },
    adminLoggedOut: (state) => {
      state.isAuth = false;
    },
  },
});

const { actions, reducer } = adminUserSlice;
export const {
  isPending,
  requestSuccess,
  requestFailed,
  getProfileSuccess,
  adminLoggedIn,
  adminLoggedOut,
} = actions;

export default reducer;
