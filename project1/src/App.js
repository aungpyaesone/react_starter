import logo from './logo.svg';
import './App.css';
import React, { useState, createRef, useReducer } from 'react';
import Component1 from './Component_1';


function App(){
  return (
    <div className='App'>
        <Component1 />
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