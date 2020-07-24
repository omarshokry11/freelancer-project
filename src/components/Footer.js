import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from "react-bootstrap";
import { fetchFooter } from "../Redux/actions";

const Footer = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchFooter());
    }, [dispatch]);

    const data = useSelector(state => state.footer);

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    {(data || []).map(item => {
                        return (
                        <div className={item.class}>
                                <div key={item.id}>
                                    {item.titleName && <h5>{item.titleName}</h5>}
                                    {item.titleImage && <Image src={item.titleImage} />}
                                    {(item.linkTitle || []).map(link => {
                                        return (
                                            <div className="link">
                                                {link.linkName && <a href=" ">{link.linkName}</a>}
                                                {link.imgPath && <Image src={link.imgPath} />}
                                            </div> 
                                        );
                                    })}
                                    {item.class === "col-md-2 col-12 main-footer" && item.social ? <div className="social">
                                        {(item.social || []).map(e => {
                                            return(
                                                <a href=" " className={e.class}>
                                                    <i className={e.icon}></i>
                                                </a>
                                            );
                                        })}
                                    </div> : null}
                                </div>
                        </div>
                        );
                    })}

                    <div className="inner-footer col-12">
                        <div className="col-md-3 col-12">
                            <h6>46,053,647</h6>
                            <span>Registered Users</span>
                        </div>

                        <div className="col-md-3 col-12">
                            <h6>18,233,513</h6>
                            <span>Total Jobs Posted</span>
                        </div>

                        <div className="col-md-6 col-12">
                            <p>
                                Freelancer ® is a registered Trademark of Freelancer Technology Pty Limited (ACN 141 959 042)
                                Copyright © 2020 Freelancer Technology Pty Limited (ACN 141 959 042)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;