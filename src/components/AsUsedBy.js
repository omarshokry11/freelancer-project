import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from "react-bootstrap";
import { fetchAsUsedBy } from "../Redux/actions";

const AsUsedBy = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAsUsedBy());
    }, [dispatch]);

    const data = useSelector(state => state.asusedby);    

    return (
    <div className="container text-center">
        <div className="main-asusedby">
            <div className="row">
                <div className="tittle col-md-2 col-12">
                    <h5>As Used By</h5>
                </div>
                <div className="logo-company">
                    {
                        (data || []).map(item => {
                            return (
                                <div className="col-3" key={item.id}>
                                    <Image src={item.img} />
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


export default AsUsedBy;