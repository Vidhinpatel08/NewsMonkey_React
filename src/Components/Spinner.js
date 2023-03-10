import React from 'react'
import Loading from './Loading.gif'

const Spinner = () => {
    return (
        <div className='text-center my-4'>
            <img src={Loading} alt="Loading..." />
        </div>
    )
}

export default Spinner
