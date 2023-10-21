import styles from './table.module.css'

const TableBody = ({ tableData, columns }) => {
    return (
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        {columns.map(({ accessor }) => {
                            const tData = data[accessor] ? data[accessor] : '——'
                            return (
                                <td className={styles.tableColumn} key={accessor}>
                                    {tData}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
        </tbody>
    )
}

export default TableBody
