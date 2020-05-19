import React from 'react';

const MainNav = () => {
    return (
    <div className="container">
      <div className="row">
          <div className="col-12 text-center about">
              <h2>What's great about it?</h2>
          </div>
          <div className="col-md-4 col-12 about">
              <img src="about/13.svg" />
              <h3>Browse portfolios</h3>
              <p>Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.</p>
          </div>
          <div className="col-md-4 col-12 about">
              <img src="about/14.svg" />
              <h3>View bids</h3>
              <p>Receive free bids from our talented freelancers within seconds.</p>
          </div>
          <div className="col-md-4 col-12 about">
              <img src="about/15.svg" />
              <h3>Live chat</h3>
              <p>You can live chat with your freelancers to get constant updates on the progress of your work.</p>
          </div>
          <div className="col-md-4 col-12 about">
              <img src="about/16.svg" />
              <h3>Pay for quality</h3>
              <p>Pay for work when it has been completed and you're 100% satisfied.</p>
          </div>
          <div className="col-md-4 col-12 about">
              <img src="about/17.svg" />
              <h3>Track progress</h3>
              <p>Keep up-to-date and on-the-go with our time tracker, and mobile app.</p>
          </div>
          <div className="col-md-4 col-12 about">
              <img src="about/18.svg" />
              <h3>24/7 support</h3>
              <p>We're always here to help. Our support consists of real people who are available 24/7.</p>
          </div>
      </div>
    </div>
    )
}


export default MainNav;