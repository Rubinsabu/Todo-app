//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //note
  const [toDos, setTodos]= useState([])
  const [toDo, setToDo]= useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝</h2>
      </div>
      //note
      <div className='input'> 
          <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="✒️ Add item..."></input> 
          <i onClick={()=>setTodos([...toDos,{id:Date.now() ,text:toDo,status:false}])}className='fas fa-plus'></i>
      </div> 
      <div className='todos'>
        { toDos.map((obj)=>{

          return (
        <div className='todo'>
          <div className='left'>
            <input onChange={(e)=>{
                console.log(e.target.checked)
                console.log(obj)
                setTodos(toDos.filter(obj2=>{
                 if(obj2.id===obj.id) {
                  obj2.status=e.target.checked
                 }
                 return obj2
                }))
            }} value={obj.status} type='checkbox' name="" id=""></input>
            <p>{obj.text}</p>
          </div>
          
          <div className="right">
            <i onClick={(e)=>{
                setTodos(toDos.filter(obj2 => {
                  let temp;
                  if (obj2.id != obj.id){
                    temp = obj
                  }
                  return temp;
                }));
              }}
            className='fas fa-times'></i>
          </div>
         </div>
         )
         })}
         {toDos.map((obj)=>{
          if(obj.status){
            return(<h1>{obj.text}</h1>)
          }
          return null
         })}
      </div>
    </div>
  );
}

export default App;
