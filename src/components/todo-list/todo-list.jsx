import React from 'react'
import {TodoListItem} from '../todo-list-item/todo-list-item'
import './todo-list.css'
export const TodoList =({todos,onDeleted,onToggleImportant,onToggleDone})=>{
    //const elements = todos.map((item)=>{return <li> <TodoListItem title={item.title} important= {item.important}/></li>})
    
      const elements = todos.map((item)=>{
        const {id, ...itemProps}=item
        return <li key={id} className="list-group-item"> <TodoListItem  {...itemProps} onDeleted={(e)=>{onDeleted(id)}} 
        onToggleImportant = {(e)=>{onToggleImportant(id)}}
        onToggleDone = {(e)=>{onToggleDone(id)}}
        /> 
      
        
        </li>})
    return <div>
        <ul className="list-group">
            {elements}
        </ul>
       
    </div>
}