import React from 'react'
import { useSelector } from 'react-redux'

export const ViewCustomer = () => {
    // const {customer} = props
    const customer = useSelector(state => state.customers)
  return (
    <div>
       <h3>Customer List</h3>
       <ul style={{listStyle:'none'}}>
        {customer.map(customer => <li>{customer}</li>)}
       </ul>
    </div>
  )
}
