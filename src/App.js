import React from 'react';
import { createStore } from './redux/store';
import { rootReducer } from './redux/rootReducer';
import { increment,decrement } from './redux/types';





  var store = createStore(rootReducer, 0)
  const rezShow =store.getState;
  

const App=()=> {
  const changeTheme= (e)=>{
    let value= e.target.value;
    if(value==='light'){
      let element = document.getElementById("root");
      element.style.backgroundColor = '#0c0e1d';
      element.style.transition = '0.8s';
      e.target.value='dark';
      e.target.classList.remove("btn-secondary");
      e.target.classList.add("btn-dark");
  
    }
    else if(value==='dark'){
      let element = document.getElementById("root");
     element.style.backgroundColor = '#d3d3d3';
     element.style.transition = '0.8s';
      e.target.value='light';
      e.target.classList.remove("btn-dark");
      e.target.classList.add("btn-secondary");    
    }
  }



  const btnPlus =React.createRef();
  const btnMinus =React.createRef();
  

 const btnPlusPress = ()=>{
    store.dispatch({type:increment})
  
    store.subscribe(()=>{
    //rezult.current.value=store.getState()
  
    console.log(store.getState())
    })
   
  }
  const btnPlusMinus =()=>{
    store.dispatch({type:decrement})
  
    store.subscribe(()=>{
    //rezult.current.value=store.getState()
    console.log(store.getState())
    })
  }
  
  
 
  return (
   
      <div className="container"> 
        <div className="card border border-secondary">
          <div className="card-header elem ">

              <div >
                <h1>Redux</h1>
              </div>
                
                   <div >
                <input type="button" className="btn btn-secondary" id='changeTheme' value='light' onClick={changeTheme}/>

            </div>

            </div>
            <div className="card-body  elem">
              <div className="btnGroup">
              <button type="button" className="btn btn-success" ref={btnPlus} onClick={btnPlusPress}>Plus</button>
              <button type="button" className="btn btn-danger"  ref={btnMinus}onClick={btnPlusMinus}>Minus</button>
              <button type="button" className="btn btn-primary" id='async'>Async</button>
              
              </div>
              <div className="btnGroup">
             <div>Result: </div><div>{rezShow} </div>
              </div>
              
            </div>
          
        </div>
      
      </div>
      
  );
  
}

export default App;

