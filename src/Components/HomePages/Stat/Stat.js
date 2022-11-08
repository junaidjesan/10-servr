import React from 'react';

const Stat = () => {
    return (
        <div>
            <div className="stats stats-vertical md:w-8/12 mx-auto mb-24 shadow-md lg:stats-horizontal shadow">

                <div className="stat">
                    <div className="stat-title text-sky-800 ">Sell</div>
                    <div className="stat-value">12K</div>
                    <div className="stat-desc">Jan 1st - june 30st</div>
                </div>

                <div className="stat">
                    <div className="stat-title text-sky-800 ">New Readers</div>
                    <div className="stat-value">4.2K</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title text-sky-800 ">New Registers</div>
                    <div className="stat-value">1.2K</div>
                    <div className="stat-desc">↗︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Stat;