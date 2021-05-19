import { INITIAL_DATA } from "../static/data";

export let data = INITIAL_DATA;

export const resetData = () => {
    data = INITIAL_DATA;
}

export const changeData = (newData) => {
    data = JSON.parse(JSON.stringify(newData));
}
