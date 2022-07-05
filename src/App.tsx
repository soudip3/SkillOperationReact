import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Home} from './Home.Component'
import {getUserID, getSkill} from './genesysCloudUtils'

function App() {
  useEffect(()=>{
    getUser()
    //getSkill()
  },)
  const [userID, setUserID] = useState("")
  const [skillChecked, setSkillChecked] = useState(false)
  const getUser = async()=>{
    await getUserID()
    .then(async(data:any)=>{
      console.log(data)
      setUserID(data)
      await getSkill(data)
      .then((data:any)=>{
        if(data!==0){
          console.log(data)
          setSkillChecked(true)
        }
        else{
          setSkillChecked(false)
        }
      })
      .catch((err:any)=>{
        console.log(err)
      })
    })
    .catch((err:any)=>{
      console.log(err)
    })
  }

  
  return (
    <div className="App">
      <Home id={userID} skillChecked={skillChecked}></Home>
    </div>
  );
}

export default App;
