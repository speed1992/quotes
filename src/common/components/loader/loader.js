import React from 'react'
import './loader.css'

function Loader() {
    return (
        <div className="loading">
            <div className="uil-ring-css">
                <div></div>
            </div>
            <div className="loadingText-primary">Please wait...</div>
            <div className="loadingText-secondary">Loading...</div>
        </div>
    )
}

export default Loader
