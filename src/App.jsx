import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggessions from './Suggessions'

 
function App(){

  return (
    <div className='d-flex vh-100' >
    <div className='w-20'><Sidebar/></div>
    <div className='w-50'><Feed/></div>
    <div className='50'><Suggessions/></div>
    </div>
  )
}

export default App