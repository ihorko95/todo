import React, { Component } from 'react'
import './add-list-item.css'

 
export class AddListItem extends Component{ 
    render(){
        const {addInputText, changeInputValue, addNewTodoItem}= this.props
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') 
            addNewTodoItem()
        }
    
        return <span ><div className="row">
            <div className="col">
                <div className=""><input type= "text"  className="form-control" placeholder='Add new Item' value={addInputText} 
                    onChange={changeInputValue} 
                    onKeyDown={handleKeyDown}
                    />
                </div>
                <div className=" ">
                    <button type="button"  className="btn btn-success btn-sm form-control " onClick={addNewTodoItem}>
                        ADD
                    </button>
                </div>
            </div>
        </div>
        </span>
    }
}