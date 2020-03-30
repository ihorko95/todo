import React, {Component} from 'react'
import {AppHeader} from '../app-header/app-header'
import {SearchPanel} from '../search-panel/search-panel'
import {TodoList} from '../todo-list/todo-list'
import {ItemStatusFilter} from '../item-status-filter/item-status-filter'
import {AddListItem} from '../add-list-item/add-list-item'


export default class MainApp extends Component {

    state ={ 
        todoData : [
            {id:1, title:"Drink coffee", important: false},
            {id:2, title:"Make a meal", important: true},
            {id:3, title:"Clean the room",important: false}],
        addInputText:""
      };
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
            arr.push({id:newToDoId,title:newToDoText, important:false})
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

    render(){
        
        return <div className="container">
        <div className="row">
        <div className="mx-auto col-lg-6">
                  <div className="row">
                      <div className="col">
                          <AppHeader todo={1} done={5}/>
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
                          <TodoList todos={this.state.todoData} onDeleted={this.onDeleted}/>
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
   
