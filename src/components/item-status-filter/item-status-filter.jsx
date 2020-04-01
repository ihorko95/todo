import React,{Component} from 'react'
import "./item-status-filter.css"



export class ItemStatusFilter extends Component {
    statusFilter(e){
    console.log(e.target.value)
    e.target.className='btn btn-info'



    }

    render(){
        const {filter,changeFilter} = this.props
        const buttonData=[  {name:'all', value:'All'},
        {name:'active', value:'Active'},
        {name:'done', value:'Done'}]
 
        
        const buttons= buttonData.map((el)=>{
            const btnClass= el.name===filter ? 'btn-info': 'btn-outline-secondary'
            return <input type="button" className={`btn ${btnClass}` }value={el.value} key={el.name} onClick={()=>changeFilter(el.name)}/>})

        return <div className="item-status-filter btn-group float-sm-right">  
        {buttons}
 
    </div>
    }
}
