import React, { Component, useState } from 'react'

const WithHOC = (OldComponent) => {
    const NewComponent = () => {
        const[count,setCount] = useState(0);

        const increment = () => setCount(prestate=> prestate+1)

        return <OldComponent HOC = "HOC Component" increment={count}/>
    }
  return NewComponent
}

export default WithHOC
