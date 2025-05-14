import React, { useEffect, useRef, useState } from 'react'
import { ViewCustomer } from './ViewCustomer'
import { addCustomer as addCustomerAction } from './Slice/CustomerSlice'
import { useDispatch } from 'react-redux'

export const AddCustomer = () => {
    const [input,setInput] = useState("")
    const [customer,setCustomer] = useState([])
    const inputFocus = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        inputFocus.current.focus()
    })


    const addCustomer = () => {
        if(input){
            dispatch(addCustomerAction(input))
            // setCustomer(prestate => [...prestate,input])
            setInput('');
        }
    }
  return (
    <div>
        <h3>Add New Customer</h3>
        <input type="text" ref={inputFocus} value={input} onChange={e=>setInput(e.target.value)}/>
        <button onClick={addCustomer}>Add</button>
        {/* <ViewCustomer customer={customer}/> */}
    </div>
  )
}
