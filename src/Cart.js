import { useState,useReducer,useContext } from 'react';
import data from './data';
import React from 'react';

const reducer = (state,action)=>{
    if (action.type === 'INCREASE')
    {
        let item;
        state.products.find((item) => item.id === Number(action.payload.id.target.id)).amount += 1;
        state.total += item.price;
        return {...state}
    }
    if (action.type === 'DECREASE')
    {
        let item;
        state.products.find((item) => {
            if(item.id === Number(action.payload.id.target.id) && item.amount > 0){
                item.amount -= 1;
                return item;
            }
        })
        state.total -= item.price;
        return {...state}
    }
}
const initState = {
    products:data,
    isEmpty : false,
    total: 599.9
}

const Empty = ()=>{
    return <h1>Your Cart is empty...</h1>
}

export default function Cart() {
    const [state, dispatch] = useReducer(reducer,initState);
    if (state.total === 0)
        return <Empty />
    else{
        return (
            <div className='section-center'>
                {
                    data.map((item)=>{
                        const {id , title, price, img, amount } = item;
                        return(
                            <div className='wide-box'>
                                <div className='pr-img'><img src={img} alt='image'></img></div>
                                <div className='pr-name'>{title}</div>
                                <div className='price'>{price}</div>
                                <div className='amt'>
                                    <button id={id} onClick={(id)=>{
                                        dispatch({type:'DECREASE',payload:{id}});
                                    }} type='submit'>-</button>
                                    <div className='amt-value'>{amount}</div>
                                    <button id = {id} onClick={(id)=>{
                                        dispatch({type:'INCREASE',payload:{id}});
                                    }} type='submit'>+</button>
                                </div>
                            </div>
                        )
                    
                    })
        }
        <div className='footer'>
            <div className='total-text'>Total</div>
            <div className='total-value'>{state.total}</div>
        </div>
    </div>
    )}
}
