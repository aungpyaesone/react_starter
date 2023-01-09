import logo from './logo.svg';
import './App.css';
import React, { useState, createRef, useReducer } from 'react';
import Component1 from './Component_1';
import { BrowserRouter as Router, Link, Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import TopBar from './Topbar/Topbar';
import TodoHome from './Todo/Components/Home';
import MainPage from './Main/MainPage';
import IntervalCounter from './UseEffectIncorrectDependency/IntervalCounter';
import IntervalHook from './UseEffectIncorrectDependency/IntervalHook';
import DataFetch from './fetchdatafromAPI/DataFetch';
import ComponentF from './useContextHook/ComponentF';
import CounterOne from './useReducerHook/CounterOne';
import CounterTwo from './useReducerHook/CounterTwo';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App(){
  return (
    // <Router>
    // <div className='App'>



    //   <Routes>
    //     <Route  exact path='/' element={<TodoHome/>}></Route>
    //     <Route  exact path='/main' element={<MainPage/>}></Route>
    //   </Routes>
    //    </div>
    // </Router>
      //<IntervalCounter/>
    //<IntervalHook/>
    //<DataFetch/>
    //  <div>
    //   <UserContext.Provider value={'Aung Pyae Sone'}>
    //     <ChannelContext.Provider value={'Mg Ice'}>
    //     <ComponentF/>
    //     </ChannelContext.Provider>
    //   </UserContext.Provider>
    // </div>

    <div>
      <CounterTwo/>
    </div>
  );

}

export default App;

// const Item = ({name,price}) => (
//   <li>{name}, ${price}</li> )
// // class AddForm extends React.Component{
// //   nameRef = React.createRef();
// //   priceRef = React.createRef();

// // // using app pros
// // add = () =>{
// //   let name = this.nameRef.current.value
// //   let price = this.priceRef.current.value

// //   this.props.add(name,price);
// // }


// //   render(){
// //     return (
// //       <div>
// //         <input type="text" ref={this.nameRef}/><br/>
// //         <input type="text" ref={this.priceRef}/><br/>
// //         <button onClick={this.add}>Add</button>
// //       </div>
// //     )
// //   }
// // }

// const App = props => {
//   // let [items,setItems] = React.useState(
//   //   [
//   //     {id:1,name:"Apple",price:"0.99"},
//   //     {id:2,name:"Orange",price:"0.89"}
//   //   ]
//   // );

//   let nameRef = createRef();
//   let priceRef = createRef();

//   const add = () =>{
//     props.add(
//       props.items.length +1,
//       nameRef.current.value,
//       priceRef.current.value
//     );
//   }

//   return (
//     <div>
//       <ul>
//         {props.items.map(i => 
//         <Item
//           key={i.id}
//           name = {i.name}
//           price = {i.price}
//         /> )}
//       </ul>
//           <input type="text" ref={nameRef} /> <br />
//           <input type="text" ref={priceRef} /> <br />
//           <button onClick={add}>Add</button>
//     </div>
//   )
// }

// const dispatchToProps = dispatch => {
//   return {
//     // add is props name
//     add: (id,name,price) =>{
//       dispatch({
//         type: 'ADD',
//         items: {id,name,price}
//       });
//     }
//   } 
// }

// const stateToProps = state =>{
//   return {
//     // items is props name
//     items: state
//   };
// }
// const ReduxApp = connect(stateToProps,dispatchToProps)(App);
// export default ReduxApp;