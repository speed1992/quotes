import moment from "moment";

export const getBuildDate = (epoch) => {
    const buildDate = moment(new Date(epoch)).format("Do MMMM YYYY, h:mm:ss a");
    return buildDate;
};