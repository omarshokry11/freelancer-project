import React from 'react';
import { Carousel } from 'react-bootstrap';

import './style.css';

class Header extends React.Component{
  render (){
        return (
          <div>
            <div className="slider d-none d-md-block">
              <Carousel.Caption>
                  <h1 className="h4">Hire expert freelancers for any job, online</h1>
                  <p className="lead">Millions of small businesses use Freelancer to turn their ideas into reality.</p>
                  <button className="button1">I Want Hire</button>
                  <button className="button2">I Want Work</button>
              </Carousel.Caption>
              <Carousel>

                <Carousel.Item>
                <img
                    className="d-block carousel-img"
                    src="imge/Home/2.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block carousel-img"
                    src="imge/Home/home-bg.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block carousel-img"
                    src="imge/Home/1.png"
                    alt="Third slide"
                  />
                </Carousel.Item>

              </Carousel>
            </div>
            <div className="cover d-block d-md-none">
            <Carousel.Caption>
                  <h2>Hire expert freelancers for any job, online</h2>
                  <p>Millions of small businesses use Freelancer to turn their ideas into reality.</p>
                  <button className="btn1">I Want Hire</button>
                  <button className="btn2">I Want Work</button>
              </Carousel.Caption>
              <img src="imge/Home/2.jpg" />
            </div>
          </div>
          
      );
    }
}

export default Header;