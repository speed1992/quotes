import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { setDarkModeClassOnHTMLTag } from '../home-page/utils/utils'
import Table from '../table/table'
import columns from './columns.json'
import { createData } from './utils/utils'
const Report = () => {
    const [data, setData] = useState([])
    const markedQuotes = useSelector((state) => state.philosophersData.markedQuotes)
    const options = useSelector((state) => state.philosophersData.options)
    const darkMode = useSelector((state) => state.philosophersData.darkMode)

    useEffect(() => {
        createData({ markedQuotes, options, setData })
    }, [])

    useEffect(() => {
        setDarkModeClassOnHTMLTag(darkMode)
    }, [darkMode])

    return data.length > 0 ? (
        <Table data={data} columns={columns} />
    ) : (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontSize: '2rem', margin: '3rem' }}>No records found!</div>
            <div style={{ fontSize: '2rem', margin: '3rem' }}>Please use, marked mode feature, mark quotes as read and come back.</div>
        </>
    )
}

export default Report
