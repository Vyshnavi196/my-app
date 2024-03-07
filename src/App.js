import React,{useEffect,useState} from "react";
import './App.css';
import {auth} from './firebase';
import { UserAuth } from './UserAuth.js';
import {Home} from './Home.js';

function App() {
  const [presentUser,setPresentUser] = useState(null);
  useEffect(() =>{
    auth.onAuthStateChanged(user =>{
      if(user){
      setPresentUser({
        uid:user.uid,
        email:user.email
      })
    }
    else{
      setPresentUser(null);
    }
    })
  },[])
  return (
    <div className="App">
     {presentUser ? <Home presentUser = {presentUser} /> : <UserAuth />}
    </div>
  );
}

export default App;
