import React from 'react';

const Website = () => {
    return (
    <div className="container text-center">
        <div className="row">
        <div className="col-12 h2">
            <h2>Need work done?</h2>
        </div>        
        <div className="col-md-4 col-12 work">
            <img src="13.svg" />
            <h3>Post a job</h3>
            <p>
                It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes.
            </p>
        </div>
        <div className="col-md-4 col-12 work">
            <img src="14.svg" />
            <h3>Choose freelancers</h3>
            <p>
                Whatever your needs, there will be a freelancer to get it done: from web design, mobile app development,
                virtual assistants, product manufacturing, and graphic design (and a whole lot more).
            </p>
        </div>
        <div className="col-md-4 col-12 work">
            <img src="15.svg" />
            <h3>Pay safely</h3>
            <p>
                With secure payments and thousands of reviewed professionals to choose from, Freelancer.
                com is the simplest and safest way to get work done online.
            </p>
        </div>
    </div>
    </div>
    )
}


export default Website;