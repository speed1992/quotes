export const search = ({ target: { value } }) => {
    return []
}

export const scrollToRow = (listRef) => {
    let scrollPostion = JSON.parse(localStorage.getItem('scrollPostion'));

    // console.log("scrollPostion", scrollPostion)

    if (typeof scrollPostion != undefined && scrollPostion && scrollPostion > 0)
        listRef.current.scrollToItem(scrollPostion, "center");
}

export const delayedScrollToRow = (listRef) => {
    setTimeout(() => {
        try {
            scrollToRow(listRef);
        }
        catch (e) {
            console.log(e)
        }
    }, 1500)
}
