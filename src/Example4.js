import { useReducer, useState, useContext } from 'react';
import React from 'react'
//both reducer and defstate must be outside the component function
//reducer is a function that takes up a action and returns a new state
//we can call reducer by using dispatch function


//use of ContextAPI to handle props drilling and pass a value or function to the complete element tree
const AppContext = React.createContext();
//requires atleast two components - Provider and a Consumer
const reducer = (state,action) => {
    if(action.type === 'ADD_ITEM')
        {
            return {...state,people:[...state.people,action.payload], modalState:true, modalContent:'item added'};
        }
    if(action.type === 'EMPTY')
        {
            return {...state, modalState:true, modalContent:'please add an item'}
        }
        console.log(state);
}
const defstate ={
    people:[],
    modalState:false,
    modalContent:'hello world'
}
export default function Example4() {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defstate);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name){
            const obj = {'name':name};
            dispatch({type:'ADD_ITEM',payload:obj});
        }
        else{
            dispatch({type:'EMPTY'})
        }
    }
    console.log(state);
    return (
    <AppContext.Provider value={'cat'}>
        <div className='main'>
            <form className='form'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                <button type='submit' onClick={handleSubmit}>Add item</button>
            </form>
             {state.modalState && <Modal props={state.modalContent}></Modal>}
            {
               
                    state.people.map((item)=>{
                    const {name} = item;
                    return (
                        <div className='result'>{name}</div>
                    )
                })
            }
        </div>
    </AppContext.Provider>
    )
}

const Modal = (props)=>{
    const a = useContext(AppContext);
    console.log(a);
    return (
        <div className='alert'>{props.props}</div>
    )
}