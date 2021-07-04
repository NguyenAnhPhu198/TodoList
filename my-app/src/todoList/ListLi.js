import React, { useState }  from "react";
import { TodoListContainer, TodoListUl, Icon } from "./style";
import { GrCheckboxSelected } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import * as Listli from './objectList'
export default function ListLi() {
  const getRandomColor = ()=>{
    const colorList = ['yellow', 'orange', 'blue', 'green','deeppink'];
    const randomColor = Math.trunc(Math.random()* 5);
    return colorList[randomColor];
  };
  
  const [Color, setColor] = useState(()=>{
    const initColor = localStorage.getItem('color_box') || 'deeppink' ;
    return initColor;
  });
  const HandleClick = () => {
    const newColor = getRandomColor();
    console.log(newColor);
    setColor(newColor);
    localStorage.setItem('color_box', newColor)
  };
  return (
    <div>
      <TodoListContainer>
      <TodoListUl>
        <div> 
          <h1 style={{color : Color}} >Xin chao moi nguoi</h1>
          <button onClick={HandleClick} >Submit</button>
          </div>     
        <div>
        <input type="text"/><MdAddCircle></MdAddCircle>
        </div>
          <ul>
            {Listli.list.map((item,key) => {
              return <li key ={key}> {item} 
              <Icon>
              <GrCheckboxSelected  size="20px"/><MdDelete color='lightgreen' size="22px"/>
              </Icon> </li>;
            })}    
          </ul>
        </TodoListUl>
      </TodoListContainer>
    </div>
  );
}
