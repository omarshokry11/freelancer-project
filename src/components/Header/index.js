import React from 'react';
import { Carousel } from 'react-bootstrap';

import './style.css';

class Header extends React.Component{
  render (){
        return (
          <div className="slider">
              <Carousel.Caption style={{margin: '0 47% 20%  0'}}>
                  <h1 className="h4">Hire expert freelancers for any job, online</h1>
                  <p className="lead">Millions of small businesses use Freelancer to turn their ideas into reality.</p>
                  <button className="button1">I Want Hire</button>
                  <button className="button2">I Want Work</button>
              </Carousel.Caption>
            <Carousel>

              <Carousel.Item>
              <img
                  className="d-block  w-100"
                  src="imge/Home/2.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block  w-100"
                  src="imge/Home/home-bg.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block  w-100"
                  src="imge/Home/1.png"
                  alt="Third slide"
                />
              </Carousel.Item>

            </Carousel>
          </div>
          
      );
    }
}

export default Header;