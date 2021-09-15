import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
// import questionReducer from '../features/questionSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    // question: questionReducer,
  },
});

// store 란, state 값들을 저장하는 장소.
// reducer 에서 전달받은 action 을 redux 의 dispatch 함수를 사용하여 store 로 전달한다.
// store createStore 를 통해 만들 수 있고.
// createStore 안에 reducer 역할을 하는 함수가 들어가야 한다.

