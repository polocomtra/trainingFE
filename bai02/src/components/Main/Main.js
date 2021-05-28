import React, { useState } from 'react'
import HomeRoute from './HomeRoute'
import InfoAccount from './InfoAccount'
import ListData from './ListData'
import NavAccount from './NavAccount'
import {data} from '../../data'

const Main = () => {
    const [items,setItems]=useState(data);
    return (
        
        <main className="mainContent">
            <div className="container">
                <div className="container">
                    <HomeRoute />
                    <InfoAccount />
                    <div className="row mb-4">
                        <NavAccount />
                        <ListData items={items} />
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default Main
