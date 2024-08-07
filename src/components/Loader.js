import React from "react";

function Loader(){
    return(
        <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary sm:3xl'>
            <div className='flex gap-5 text-4xl font-semibold'>
                <h1 className="text-secondary S">S</h1>
                <h1 className="text-white A">A</h1>
                <h1 className="text-tertiary M">M</h1>
            </div>
        </div>
    )
}
export default Loader;