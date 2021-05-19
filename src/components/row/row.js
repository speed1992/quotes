import { useSnackbar } from 'react-simple-snackbar'
import copy from 'copy-to-clipboard';
import { data } from "../../utils/staticDataUtils";

export const Row = ({ data: { searchText }, index, style }) => {

    const [openSnackbar] = useSnackbar()

    return (
        <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
            {`${data[index]['id']}. ${data[index]['quote']}`}
            <button onClick={() => {
                copy(`"${data[index]['quote']}"\n\n― Friedrich Nietzsche`);
                if (searchText === "")
                    localStorage.setItem("scrollPosition", data[index]['id'])
                openSnackbar('Copied!', 1000);
            }}>Copy!{process.env.NODE_ENV !== "production" ? <>!</> : null}</button>
        </div >
    )
};