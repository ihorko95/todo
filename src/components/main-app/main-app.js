import React, {Component} from 'react'
import {AppHeader} from '../app-header/app-header'
import {SearchPanel} from '../search-panel/search-panel'
import {TodoList} from '../todo-list/todo-list'
import {ItemStatusFilter} from '../item-status-filter/item-status-filter'


export default class MainApp extends Component {

    state ={ todoData : [
        {id:1, title:"Drink coffee", important: false},
        {id:2, title:"Make a meal", important: true},
        {id:3, title:"Clean the room",important: false}]
      };
  
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
                  </div>
                  </div>
      </div>   
  }

}
   
