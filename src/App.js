import { render } from '@testing-library/react';
import React , {component} from 'react'
import profilecard from './components/profilecard'

class App extends component {
  constructor(){
  supper();

  this.handleclick=this.handleclick.bind(this)

  this.state={
    writer:{
      londing:false,
      list:[]
    }
  };

this.handleclick(){
  this.setstate({
    writer:{
      loading:true,
    }
  });
  setTimeout(async()=> {
    let resp=await("/writers.json");
    let result =await resp.json()

  })

  this.setstate({
    writers:{
      loading:false,
      list:result
    }
  });



  }

}

 render(){
  const {
    writers:{loading,  list}
  }=this.state;

  
 }

 if(loading){
 return (

    <div>
    <h1>writers profilr</h1>
    <div className="container">
    <div className="card action">
    <p className="infotext"> loading...</p>

    </div> 

    </div>
    </div>
  )
 }

 
   
} 
return (

  <div>
  <h1>writers profilr</h1>
  <div className="container">
  list.length === 0 ?
    
    
  <div className="card action">
  <p className="infotext"> oops...no writer profile found</p>
  <button className= 'actionBtn' onclick={this.handleclick}>Get writers</button>

  </div> 
  
  </div>
  </div>
  )
export default App
