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
        ],
        addInputText:"",
        term:"",
        filter: 'active' //active done all
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
    onToggleProperty(arr,id,propName){
        const oldItem= arr[id]    
            const newItem = {...oldItem, [propName]:!oldItem[propName]}
            return [
                ...arr.slice(0,id),
                newItem,
                ...arr.slice(id+1) ]          
    }
    onToggleImportant =(id)=>{
        
        this.setState(({todoData})=>{
           const idx =todoData.findIndex((el)=>el.id===id)
          
            return {todoData: this.onToggleProperty(todoData,idx,"important")}
     
        })
    }
    onToggleDone =(id)=>{
        
        this.setState(({todoData})=>{
           const idx =todoData.findIndex((el)=>el.id===id)
           return {todoData: this.onToggleProperty(todoData,idx,"done")}
     
        })
    }
    changeSearchTerm=(e)=>{
        const newTerm =e.target.value
        this.setState(()=>{return {term:newTerm}})
    }

    onSearch (items, term){
        if (term.length===0) {return items}
      return  items.filter((el)=>{
            return el.title.toLowerCase().indexOf(term.toLowerCase()) > -1})
        
    }
    filter(item,filter){
    switch (filter) {
        case 'all':
            return item
        case 'active':
            return item.filter((el)=>!el.done)
        case 'done':
            return item.filter((el)=>el.done)

    default:
        break;
}
    }
    changeFilter=(name)=>{
        const newFilter=name
        this.setState(()=>{return {filter:newFilter}})

    }
    render(){
        const {todoData, term, filter} = this.state
        const visibleItems =this.filter(this.onSearch(todoData, term),this.state.filter)
        const todo = todoData.filter((el)=>!el.done).length
        const done = todoData.length - todo
        
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
                          <SearchPanel changeSearchTerm={this.changeSearchTerm} term={term} />
                      </div>
                      <div className="col-sm">
                          <ItemStatusFilter filter={filter} changeFilter={this.changeFilter}/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col">
                          <TodoList todos={visibleItems} onDeleted={this.onDeleted} 
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
   
