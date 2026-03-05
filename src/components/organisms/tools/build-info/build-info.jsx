import React from 'react'
import buildInfo from '../../../../scripts/buildDate.json'

const BuildInfo = () => {
    const commit = process.env.REACT_APP_COMMIT_HASH?.substring(0, 7);
    return (
        <div style={{ fontSize: '1rem' }}>
            <div>App Version:</div>
            <div>{buildInfo?.buildDateTime}</div>
            {commit && (<div>{commit}</div>)}
        </div>
    )
}

export default BuildInfo
