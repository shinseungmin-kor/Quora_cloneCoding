import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {

      state.user = action.payload;
      // console.log(action.payload)
    },
    
    logout: state => {
      state.user = null;
    },

  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;

// export 는 한개의 선언에서 여러개를 다른 컴포넌트에서 import 해올 수 있다.
// export defalt 는 오로지 한개의 모듈만을 가져올 수 있다.
 