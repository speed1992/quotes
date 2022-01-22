import moment from "moment";
import React, { useEffect, useState } from "react";
import buildDate from '../../static/buildDate.json';

const logDates = (...dates) => {
    dates.map((date) => console.log(moment(date).format('MMMM Do YYYY, h:mm:ss a')))
}

const buildDateGreaterThan = (latestDate, currentDate) => {
    const momLatestDateTime = moment(new Date(latestDate));
    const momCurrentDateTime = moment(new Date(currentDate));

    logDates(latestDate, currentDate)

    if (momLatestDateTime.isAfter(momCurrentDateTime)) {
        return true;
    } else {
        return false;
    }
};

function withClearCache(Component) {
    function ClearCacheComponent(props) {
        const [isLatestBuildDate, setIsLatestBuildDate] = useState(false);

        useEffect(() => {
            fetch("meta.json")
                .then((response) => response.json())
                .then((meta) => {
                    const latestVersionDate = meta.buildDate;
                    const currentVersionDate = buildDate;

                    const shouldForceRefresh = buildDateGreaterThan(
                        latestVersionDate,
                        currentVersionDate
                    );
                    if (shouldForceRefresh) {
                        console.log("Force reload happening")
                        setIsLatestBuildDate(false);
                        refreshCacheAndReload();
                    } else {
                        console.log("Serving the old version as it is the latest")
                        setIsLatestBuildDate(true);
                    }
                }).catch((e) => console.log(e));
        }, []);

        const refreshCacheAndReload = () => {
            if (caches) {
                // Service worker cache should be cleared with caches.delete()
                caches.keys().then((names) => {
                    for (const name of names) {
                        caches.delete(name);
                    }
                });
            }
            // delete browser cache and hard reload
            window.location.reload(true);
        };

        return (
            <React.Fragment>
                {isLatestBuildDate ? <Component {...props} /> : null}
            </React.Fragment>
        );
    }

    return ClearCacheComponent;
}

export default withClearCache;