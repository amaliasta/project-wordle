import React from "react";

function Banner({ status, children }) {
    return (
        <div className={`${status} banner`}>
            <div className="banner-content">{children}</div>
        </div>
    );
}

export default Banner;
