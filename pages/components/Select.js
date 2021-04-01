import React,{useState} from 'react'
import Router from 'next/router'

const Select = () => {

    const [payload,setPayload]=useState({type:"",value:""})
    const handleSelectChange = (event)=> {
        const { name, value } = event.target;
        setPayload(prev =>{
            return{
                ...prev,
                [name]: value
        }
        });
    }
    const handleClick = (event)=> {
        console.log(payload);
        Router.push(`/profile/${payload.type}?value=${payload.value}`);
    }
    return (
        <>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">First and last name</span>
            </div>
            <select name="type" onChange={(e)=>handleSelectChange(e)} class="form-select ">
                <option selected="selected" disabled>Choose...</option>
                <option  value="email">Email</option>
                <option value="profile">LinkdeIn</option>
                <option value="profile">Facebook</option>
            </select>
            <input type="text" name="value" onChange={e =>handleSelectChange(e)} value={payload.value} class="form-control w-50 p-3"/>
        </div>
        <div class="input-group-append">
                <button class="btn btn-outline-secondary" onClick={e=>handleClick(e)} type="button">Button</button>
        </div>
        </>
    )
}

export default Select