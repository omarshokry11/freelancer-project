import React from 'react';

const Website = () => {
    return (
    <div className="main-work text-center container">
        <div className="row">
            <div className="tittle col-12">
                <h2>Need something done?</h2>
            </div>
            <div className="col-md-4 col-12">
                <img src="post.svg" />
                <h3>Post a job</h3>
                <div>
                    It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes.
                </div>
            </div>
            <div className="col-md-4 col-12">
                <img src="choose.svg" />
                <h3>Choose freelancers</h3>
                <div>
                    Whatever your needs, there will be a freelancer to get it done: from web design, mobile app development,
                    virtual assistants, product manufacturing, and graphic design (and a whole lot more).
                </div>
            </div>
            <div className="col-md-4 col-12">
                <img src="pay.svg" />
                <h3>Pay safely</h3>
                <div>
                    With secure payments and thousands of reviewed professionals to choose from, Freelancer.
                    com is the simplest and safest way to get work done online.
                </div>
            </div>
        </div>
    </div>
    )
}


export default Website;