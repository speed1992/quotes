import { useSnackbar } from 'react-simple-snackbar'
import copy from 'copy-to-clipboard';
import { currentData } from "../../utils/staticDataUtils";

export const Row = ({ data: { searchText }, index, style }) => {

    const [openSnackbar] = useSnackbar()

    return (
        currentData[index] !== undefined ? (<div key={currentData[index]['id']} className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
            {`${currentData[index]['id']}. ${currentData[index]['quote']}`}
            <button onClick={() => {
                copy(`"${currentData[index]['quote']}"\n\n― Friedrich Nietzsche`);
                if (searchText === "")
                    localStorage.setItem("scrollPosition", currentData[index]['id'])
                openSnackbar('Copied!', 1000);
            }}>Copy!{process.env.NODE_ENV !== "production" ? <>!</> : null}</button>
        </div >) : null

    )
};