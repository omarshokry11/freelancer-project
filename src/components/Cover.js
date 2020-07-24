import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from "react-bootstrap";
import { fetchCover } from "../Redux/actions";

const Cover = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCover());
    }, [dispatch]);
    
    const data = useSelector(state => state.cover);

    return (
    <div className="cover">
        <div className="main-cover">
            <div className="container">
                <div className="row">
                    {
                        data.map(item => {
                            return (
                                <div className="col-12" key={item.id}>
                                    <div className="col-md-5 col-12 inner-api">
                                        <h6>{item.title}</h6>
                                        <h4>{item.titleDescription}</h4>
                                        <p>{item.details}</p>
                                        <button>{item.learnBtn}</button>
                                        <div className="img">
                                            <Image src={item.img} />
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-12 inner-cover">
                                        <h6>FREELANCER ENTERPRISE</h6>
                                        <h4>Company budget? Get more done for less</h4>
                                        <p>Use our workforce of 43 million to help your business achieve more.</p>
                                        <button>Conatct US</button>
                                        <div className="img">
                                            <Image src="writting.jpg" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    )
}


export default Cover;