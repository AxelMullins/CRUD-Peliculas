import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className='text-center m-5 p-5'>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader