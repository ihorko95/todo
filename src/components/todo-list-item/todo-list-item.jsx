import React, {Component} from 'react'
import './todo-list-item.css'

export class TodoListItem extends Component{
  

  
  render(){
   const {title, onDeleted,onToggleImportant,onToggleDone, important,done} = this.props
   //const {done, important} = this.state

      let classNames='', cldone='',clim=''
      if(done===true) cldone=" done"
      if(important===true)clim=" important"
       classNames="im "+cldone+clim
return<span className="im">
 <span  className={classNames} onClick={onToggleDone}>{title}</span> 
  <div className="btn-group float-right btn-group" >
    <button type="button"  className="btn btn-outline-danger btn-sm "
    onClick={onDeleted}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
    </button>

    
    <button type="button"  className="btn btn-outline-success btn-sm "
    onClick={onToggleImportant}>
      <i className="fa fa-exclamation" aria-hidden="true" ></i>
    </button>
</div>
</span>
  }
}

