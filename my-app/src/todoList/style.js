import styled from "styled-components";
export const TodoListContainer = styled.div`
    width: 100;
    background-color: #f8bc74;

    margin: auto;

`
export const TodoListUl = styled.div`
       text-align:center;
       margin: auto;
       padding:10px;
    input{
        width: 300px;
        height:30px;
        outline:none;

    }
    ul{
        display: inline;
        align-items:center; 
        li{ 
            display: flex;
            justify-content: space-between;
            width: 300px;
            height: 20px;
            background-color:white;
            list-style-type: none;
            margin-bottom: 10px;
            padding: 10px; 
        
        }
    }

`
export const Icon = styled.div`
        display: flex;
        color: lightgreen;
        justify-content: space-between;
`
export const Props = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 10px;
`