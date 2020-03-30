import React from 'react'

export const AppHeader =({todo, done})=>{
   return <div className="row ">
      <div className="col-12 col-sm-6 "> <h1>TODO List</h1></div>
      <div className="col-12 col-sm-6 align-self-end"><h6 className="float-sm-right">{todo} more to do, {done} done</h6></div>
     
      
      </div>
} 