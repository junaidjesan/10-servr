import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse mb-4 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Who I am?
                </div>
                <div className="collapse-content">
                    <p>hello i am junaid ahamed jesan and would like to say junaid jesan. i like to do programming but this is some of my books which i wrote</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse mb-4 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    My Achievements?
                </div>
                <div className="collapse-content">
                    <p>There is a spelling mistake which ideally should be avoided. But, the major point here is showing your interest towards a particular topic by writing it in ur DAF which increases the probability of questions being asked from that topic. And since I was interested in cricket and had read about it quiet often</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse mb-4 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is my Goal?
                </div>
                <div className="collapse-content">
                    <p>Goal is an international association football news website founded in 2004 by Chicco Merighi and Gianluigi Longinotti-Buitoni. Goal is published in 19 languages, with 38 national editions and 600 contributors.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;