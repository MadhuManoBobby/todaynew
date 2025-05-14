import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HookCount } from './HookCount'
import ClassCount from './ClassCount'
import { AddCustomer } from './AddCustomer'
import { Store } from './Store'
import { Provider } from 'react-redux'
import { ViewCustomer } from './ViewCustomer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={Store} basename={import.meta.env.BASE_URL}>
      <div>
        <h1>Welcome</h1>
        {/* <input type="text" />
        <button>Select</button> */}
        {/* <HookCount/> */}

        {/* <ClassCount/> */}
        {/* <HookCount/> */}
        <AddCustomer/>
        <ViewCustomer/>
      </div>
      </Provider>
    </>
  )
}

export default App
