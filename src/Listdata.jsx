import React from 'react'

const Listdata = (props) => {
    return (
        <>
            <div className='todostyle'>
                <button className="btn btnred" onClick={()=>{props.deleteItem(props.id)}}>-</button>
                <li className='listli'>{props.item}</li>
            </div>
        </>
    )
}

export default Listdata;