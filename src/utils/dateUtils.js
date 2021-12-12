import moment from "moment";

export const getBuildDate = (epoch) => {
    const buildDate = moment(epoch).format("Do MMMM YYYY, h:mm:ss a");
    return buildDate;
};