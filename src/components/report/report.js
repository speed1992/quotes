import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Table from '../table/table'
import columns from './columns.json'
import { createData } from './utils/utils'

const Report = () => {
    const [data, setData] = useState([])
    const markedQuotes = useSelector((state) => state.philosophersData.markedQuotes)
    const options = useSelector((state) => state.philosophersData.options)
    const originalData = useSelector((state) => state.philosophersData.originalData)

    useEffect(() => {
        createData({ markedQuotes, originalData, options, setData })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return data.length > 0 && <Table data={data} columns={columns} />
}

export default Report
