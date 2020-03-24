import React from 'react';

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



function App() {
 
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
              <div>
              <button type="button" className="btn btn-success">Plus</button>
              <button type="button" className="btn btn-danger">Minus</button>
              <button type="button" className="btn btn-primary">Async</button>

              </div>
              <div>
              Result: <p></p>
              </div>
              
            </div>
          
        </div>
      </div>
  );
}

export default App;
