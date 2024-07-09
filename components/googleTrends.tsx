import React from 'react';

const GoogleTrends: React.FC = () => {
    return (
        <div>
            <h1>Google Trends</h1>
            <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/3728_RC01/embed_loader.js"></script> 
                {/* <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"/g/11swmy6yh8","geo":"","time":"today 5-y"},{"keyword":"/g/11hzcqhmq1","geo":"","time":"today 5-y"},{"keyword":"/g/11c54dt85y","geo":"","time":"today 5-y"}],"category":0,"property":""}, {"exploreQuery":"date=today%205-y&q=%2Fg%2F11swmy6yh8,%2Fg%2F11hzcqhmq1,%2Fg%2F11c54dt85y&hl=en-US","guestPath":"https://trends.google.com:443/trends/embed/"});  */}
            {/* </script> */}
        </div>
    );
};

export default GoogleTrends;
