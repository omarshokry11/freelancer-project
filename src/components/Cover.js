import React from 'react';

const Cover = () => {
    return (
    <div className="cover">
        <div className="main-cover">
           <div id="main-cover">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 d-none d-md-block test">
                            <h2>TEST</h2>
                        </div>
                        <div className="tittle col-md-6 col-12">
                            <h2>Freelancer Enterprise</h2>
                            <h6>Take strategic advantage in your industry.</h6>
                            <p className="lead">
                                Tap into over 45 million skilled professionals in over 1600 skills sets in 247 countries, regions and territories.
                            </p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
           </div>
        
            <div className="inner-cover">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 tittle">
                            <h2>Freelancer API</h2>
                            <h6>Task talent from software.</h6>
                            <p className="lead">Why set up costly infrastructure when you can make an API call to the cloud?</p>

                            <a href="#">View Documentation</a>
                        </div>

                        <div className="col-md-6 col-12 d-none test">
                            <h2>API</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Cover;