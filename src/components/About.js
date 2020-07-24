import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from "react-bootstrap";
import { fetchAbout } from "../Redux/actions";

const About = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAbout());
    }, [dispatch]);
    
    const data = useSelector(state => state.about);

    return (
        <div className="main-about">
            <div className="container text-center">
                <div className="row">
                    <div className="about col-12">
                        <h2>What's great about it?</h2>
                    </div>
                    <>
                        {
                            data.map(item => {
                                return (
                                    <div className="col-md-4 col-12" key={item.id}>
                                        <Image src={item.img} />
                                        <h3>{item.title}</h3>
                                        <p>{item.details}</p>
                                    </div>
                                )
                            })
                        }
                    </>
                </div>
            </div>
        </div>
    )
}


export default About;