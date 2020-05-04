import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

class MainCarousel extends React.Component{
  render (){
        return (
            <div className="main-carousel d-none d-md-block">
              <div className="main-carousel-caption">
                  <h1>Hire expert freelancers for any job, online</h1>
                  <p className="lead">Millions of small businesses use Freelancer to turn their ideas into reality.</p>
                  <button>I want Hire</button>
                  <button>I want Work</button>
              </div>
              <Carousel>
                <Carousel.Item>
                <img className="d-block w-100" src="/bg2.jpg" alt="First Image" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src="/bg1.jpg" alt="Second Image" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src="/bg2.jpg" alt="Third Image" />
                </Carousel.Item>

              </Carousel>
            </div>
      );
    }
}

export default MainCarousel;