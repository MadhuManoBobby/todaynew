import React, { useState } from 'react'
import count from './ClassCount'

export const HookCount = () => {
    const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(prestate=> prestate+1)}>Increment</button>
        <button onClick={() => setCount(prestate=> prestate-1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>  
  )
}
