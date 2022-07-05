import React, { useEffect, useState } from 'react';
import axios from 'axios'
//import logo from './logo.svg';
import './App.css';
import {
    
} from './genesysCloudUtils'
//import { isConstructorDeclaration } from 'typescript';

interface Props{
    id:string
    skillChecked:boolean
}
const api = axios.create({
    baseURL: "http://192.168.63.62:81",
})


export function Home({id, skillChecked }:Props) {
    const [value, setValue] = useState(skillChecked)
    useEffect(()=>{
        if(skillChecked){
            setValue(true)
        }
        else{
            setValue(false)
        }
    },[skillChecked])
    
  const handleSkill = (e:any) =>{
    //skillChecked = !skillChecked
    //console.log(value)
    //console.log(value)
    api.get('/skillChecked?id='+encodeURIComponent(id)+'&skill='+encodeURIComponent(!value))
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
    setValue(!value)
    // await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))
  }

  return (
    <div className="App">
      <input type={'checkbox'} id='skillOperation' name='skillOperation' onClick={handleSkill} checked={value}></input>
      <label htmlFor='skillOperation'>Add Dealer Skill</label>
    </div>
  );
}

