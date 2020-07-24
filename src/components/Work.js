import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from "react-bootstrap"
import { fetchWork } from "../Redux/actions";

const Work = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWork());
    }, [dispatch]);

    const data = useSelector(state => state.work);

    return (
    <div className="main-work text-center container">
        <div className="row">
            <div className="tittle col-12">
                <h2>Need something done?</h2>
            </div>
            {
                data.map(item => {
                    return (
                        <div className="col-md-4 col-12" key={item.id}>
                            <Image src={item.img} />
                            <h3>{item.title}</h3>
                            <div>{item.details}</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}


export default Work;