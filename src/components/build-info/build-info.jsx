import React from 'react'
import buildInfo from '../../scripts/buildDate.json'

const BuildInfo = () => {
    return (
        <div style={{ fontSize: '0.9rem' }}>
            <div>Last Updated:</div>
            <div>{buildInfo?.buildDateTime}</div>
        </div>
    )
}

export default BuildInfo
