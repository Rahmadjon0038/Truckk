import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { rootData } from '../utils/RootData'
import Home from '../pages/Home'
function RootControl() {
    return (
        <div>
            <Routes>
                <Route  path='/' element={<Home/>}/>
                {rootData?.map((item)=>(
                    <Route key={item.id} path={item?.path} element={item.name}/>
                ))}
                <Route path='*' element={<h1 className='text-5xl text-center'>Not Found</h1>}/>
            </Routes>
        </div>
    )
}

export default RootControl
