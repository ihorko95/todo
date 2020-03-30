import React, {Component} from 'react'
import './todo-list-item.css'

export class TodoListItem extends Component{
  
  state ={
    done: false,
    important: false
  }
  onTitleClick = ()=>{
   this.setState(({done})=>{
    return {done:!done}
   })

  }
  onMarkClick = ()=>{
    this.setState(({important})=>{
     return{ important:!important}
    })
 
   }
  
  render(){
   const {title, onDeleted} = this.props
   const {done, important} = this.state

      let classNames='', cldone='',clim=''
      if(done) cldone=" done"
      if(important)clim=" important"
       classNames="im "+cldone+clim
return<span className="im">
 <span  className={classNames} onClick={this.onTitleClick}>{title}</span> 
  <div className="btn-group float-right btn-group" >
    <button type="button"  className="btn btn-outline-danger btn-sm "
    onClick={onDeleted}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
    </button>
  
    
    <button type="button"  className="btn btn-outline-success btn-sm "
    onClick={this.onMarkClick}>
      <i className="fa fa-exclamation" aria-hidden="true" ></i>
    </button>
</div>
</span>
  }
}

