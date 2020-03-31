import React, {Component} from 'react'
import {AppHeader} from '../app-header/app-header'
import {SearchPanel} from '../search-panel/search-panel'
import {TodoList} from '../todo-list/todo-list'
import {ItemStatusFilter} from '../item-status-filter/item-status-filter'
import {AddListItem} from '../add-list-item/add-list-item'
let idm =0
export default class MainApp extends Component {


    state ={ 
        todoData : [
            this.createNewTodoItem("Drink coffee"),
            this.createNewTodoItem("Make a meal"),
            this.createNewTodoItem("Clean the room"),
            /*
            {id:1, title:"Drink coffee", important: false},
            {id:2, title:"Make a meal", important: true},
            {id:3, title:"Clean the room",important: false}
            */
        ],
        addInputText:"",
      };
    createNewTodoItem  (title){
         
          return{
            id:idm++,title:title,done:false, important:false
          }
        
      }
    changeInputValue =(e)=>{
       const newText =e.target.value
       this.setState(()=>{return {addInputText:newText}})
        
    }
     addNewTodoItem =()=>{
         const newToDoId=this.state.todoData.length+1
         const newToDoText =this.state.addInputText
        if(newToDoText ==='') return

        this.setState(({todoData})=>{
            const arr =[...todoData.slice(0)]
            arr.push({id:newToDoId,title:newToDoText,done:false, important:false})
        return({todoData:arr})
        })
        this.setState(()=>{return({addInputText:''})})
    }
    onDeleted = (id)=>{
        this.setState(({todoData})=>{
            const idx =todoData.findIndex((el)=>el.id===id)
            const arr = [
                ...todoData.slice(0,idx),
                ...todoData.slice(idx+1) ]
            return {todoData:arr}
        })
    }
    onToggleImportant =(id)=>{
        
        this.setState(({todoData})=>{
           const idx =todoData.findIndex((el)=>el.id===id)
            const oldItem= todoData[idx]    
            const newItem = {...oldItem, important:!oldItem.important}
            const arr = [
                ...todoData.slice(0,idx),
                newItem,
                ...todoData.slice(idx+1) ]          
            return {todoData:arr}
     
        })
    }
    onToggleDone =(id)=>{
        
        this.setState(({todoData})=>{
           const idx =todoData.findIndex((el)=>el.id===id)
            const oldItem= todoData[idx]    
            const newItem = {...oldItem, done:!oldItem.done}
            const arr = [
                ...todoData.slice(0,idx),
                newItem,
                ...todoData.slice(idx+1) ]          
            return {todoData:arr}
     
        })
    }
   
    render(){
        const todo = this.state.todoData.filter((el)=>!el.done).length
        const done = this.state.todoData.length - todo
        
        return <div className="container">
        <div className="row">
        <div className="mx-auto col-lg-6">
                  <div className="row">
                      <div className="col">
                          <AppHeader todo={todo} done={done}/>
                      </div>
                  </div> 
                  <div className="row align-items-center">
                      <div className="col-sm">
                          <SearchPanel/>
                      </div>
                      <div className="col-sm">
                          <ItemStatusFilter/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col">
                          <TodoList todos={this.state.todoData} onDeleted={this.onDeleted} 
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                          />
                      </div>
                  </div>

                          <AddListItem 
                          addInputText={this.state.addInputText} 
                          changeInputValue= {this.changeInputValue} 
                          addNewTodoItem={this.addNewTodoItem}/>
  

                  
                  </div>
                  </div>
      </div>   
  }

}
   
