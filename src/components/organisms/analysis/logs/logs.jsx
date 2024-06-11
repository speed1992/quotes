import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { API_ENDPOINTS } from '../../../../common/apis/apiEndpoints'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import styles from './logs.module.css'

const Logs = () => {
    const logs = useSelector((state) => state.philosophersData.logs)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        async function fetchErrors() {
            let response = await retryTenTimes(() => fetch(API_ENDPOINTS.ERROR.GET))
            response = await response.json()
            setErrors(response?.errorList)
        }
        fetchErrors()
    }, [])

    if (logs.length < 1 && errors.length < 1) return <>No logs found</>

    return (
        <div className={styles.addPadding}>
            {logs?.map((log, index) => (
                <div key={index}>{log}</div>
            ))}
            {errors?.map((error, index) => (
                <>
                    <div key={index}>{JSON.stringify(error)}</div>
                    <br />
                    <br />
                </>
            ))}
        </div>
    )
}

export default Logs
