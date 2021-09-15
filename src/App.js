import React, {useEffect} from 'react';
import './App.css';
import Quora from "./Quora";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import Login from "./Login";
import {auth} from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect( () => {
    auth.onAuthStateChanged((authUser) => {
        if (authUser){
            dispatch(login({

                uid: authUser.uid,
                photo: authUser.photoURL,
                displayName: authUser.displayName,
                email: authUser.email
            }))
            console.log(authUser)
        } else {
            dispatch(logout())
        }
    })
}, [dispatch])

  return (
    <div className="App">
      {
        user ? (<Quora/>) : (<Login/>)
      }
    </div>
  );
}

export default App;


/* useSelector 란, 리덕스의 상태값을 조회하기 위한 훅 함수
여기서는 userSlice.js 에서 state -> state.user.user 를 가져오므로
현재 state에 createSlice action 에 따른 user의 상태값을 넣어주는 것으로 이해하면 된다. */