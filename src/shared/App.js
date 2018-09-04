import React, { Component } from "react";
import axios from 'axios';
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

 state = {
   title: "wew"
 }

 constructor(props){
   super(props);   
 }

 componentWillMount() {

   axios.get("https://jsonplaceholder.typicode.com/todos")
     .then(res => {
        this.setState({resultado: res.data })       
     })
 }

 


 render() {
  const data = this.state.resultado;
  let listItems = [];
  if (data != undefined){
    // console.log("x" + data);
    listItems = data.map((d) => <div key={d.id}>{d.title}</div>);
  }
  
   return (
     <div className="App">
       <div className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h2>Welcome to React in the Server</h2>         
       </div>
       <div className="App-intro">{listItems}</div>
     </div>
   );
 }
}

export default App;