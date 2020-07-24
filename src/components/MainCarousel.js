import React from 'react';
import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCarousel } from '../Redux/actions';

class MainCarousel extends React.Component{
  componentDidMount() {
    this.props.fetchCarousel();    
  }

  render (){
        return (
            <div className="main-carousel d-none d-md-block">
              <div className="main-carousel-caption">
                  {
                    this.props.carousel.map((item, i) => {                                  
                      return (
                        <>
                          {item.captionTitle && <h1 key={i}>{item.captionTitle}</h1>}
                          {item.captionDescription && <p key={i+1} className="lead">{item.captionDescription}</p>}
                          {
                            (item.btnText || []).map(btn => {
                              return (
                                <button key={btn.id}>
                                  {btn.btnName}
                                </button>
                              )
                            })
                          }
                        </>
                      )
                    })
                  }
              </div>
              <Carousel fade={true} controls={false} touch={true}>
                {
                  this.props.carousel.map(item => {
                    return (
                      <Carousel.Item key={item.id}>
                        <img className="d-block w-100" src={item.img} alt="First" />
                      </Carousel.Item>
                    )
                  })
                }
              </Carousel>
            </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    carousel: state.carousel
  }
}

export default connect(mapStateToProps, { fetchCarousel })(MainCarousel);