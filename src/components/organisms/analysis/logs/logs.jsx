import { useSelector } from 'react-redux'

const Logs = () => {
    const logs = useSelector((state) => state.philosophersData.logs)

    return logs.map((log) => <div>{log}</div>)
}

export default Logs
