
import { useSnackbar } from 'react-simple-snackbar'
import copy from 'copy-to-clipboard';
import { data } from "../../static/data";

export const Row = ({ index, isScrolling, style }) => {

    const [openSnackbar] = useSnackbar()

    return (
        <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
            {`${index + 1}. ${data[index]}`}
            <button onClick={() => {
                copy(`"${data[index]}"\n\n― Friedrich Nietzsche`);
                localStorage.setItem("scrollPostion", index)
                openSnackbar('Copied!', 1000);
            }}>Copy!</button>
        </div >
    )
};