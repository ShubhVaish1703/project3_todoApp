import React, { useState } from 'react'
import Listdata from './Listdata';

const Todo = () => {
    const [inputdata, setinputdata] = useState('');
    const [items, setitems] = useState([]);
    const onChange = (event) => {
        setinputdata(event.target.value);
    }
    const updateItems = () => {
        if (inputdata.length > 0) {
            setitems((previtems) => {
                return [...previtems, inputdata]
            })
            setinputdata('');
        }
    }
    const deleteItem = (id) =>{
            setitems((previtems)=>{
                return previtems.filter((value,index)=>{
                    return index !== id;
                })
            })
    }
    return (
        <>
            <div className="section">
                <div className="container">
                    <br />
                    <br />
                    <p className='heading'>Todo List</p>
                    <br />
                    <input className='input' type="text" placeholder='Add a item' value={inputdata} onChange={onChange} />
                    <button className="btn btngreen" onClick={updateItems}> + </button>
                    <ol>
                        {
                            items.map((item,index) => {
                                return <Listdata id={index} key ={index} item={item} deleteItem={deleteItem} />
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Todo;