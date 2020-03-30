import React,{Component} from 'react'
import "./item-status-filter.css"


export class ItemStatusFilter extends Component {
    render(){
        return <div className="item-status-filter btn-group float-sm-right">  
        <input type="button" className="btn btn-info" value="All"/>
        <input type="button" className="btn btn-outline-secondary" value="Active"/>
        <input type="button" className="btn btn-outline-secondary" value="Done"/>
    </div>
    }
}
