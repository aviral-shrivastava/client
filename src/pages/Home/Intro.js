import React from 'react'

function Intro() {
    return (
        <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
            <h1 className='text-white'>Hi, I am</h1>
            <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Aviral Shrivastava</h1>
            <h1 className='text-7xl sm:text-3xl text-white font-semibold'>I build things for the web</h1>
            <p className='text-white'> I am a full stack web developer. Currently in VIT Bhopal</p>
            <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get started</button>
        </div>
    )
}

export default Intro