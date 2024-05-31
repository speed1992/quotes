import { useSelector } from 'react-redux'

const Logs = () => {
    const logs = useSelector((state) => state.philosophersData.logs)

    if (logs.length < 1) return <>No logs found</>

    return logs.map((log, index) => <div key={index}>{log}</div>)
}

export default React.memo(Logs)
