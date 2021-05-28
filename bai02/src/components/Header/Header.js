import React from 'react'
import Brand from './Brand'
import Profile from './Profile'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-white header mainHeader-1">
                <div className="container-fluid">
                    <div className="row flex-grow-1 undefined">
                        <Brand />
                        <Profile />
                    </div>
                </div>
                
            </nav>
        </header>
    )
}

export default Header
