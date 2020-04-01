import React from 'react'

export const SearchPanel =({term,changeSearchTerm})=>{
    return <div>
        <input className="form-control" placeholder='Search' value={term} onChange={changeSearchTerm}/>
    </div>
}