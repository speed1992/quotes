
import { useSnackbar } from 'react-simple-snackbar'
import copy from 'copy-to-clipboard';
import { data } from "../../static/data";

export const SearchRow = ({ index, isScrolling, style }) => {

    const [openSnackbar] = useSnackbar()

    return (
        <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
            {`${data[index]['id']}. ${data[index]['quote']}`}
            <button onClick={() => {
                copy(`"${data[index]['quote']}"\n\n― Friedrich Nietzsche`);
                openSnackbar('Copied!', 1000);
            }}>Copy1!</button>
        </div >
    )
};