import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from "react-bootstrap";
import { fetchSkills } from "../Redux/actions";


const Skills = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSkills());
    }, [dispatch]);

    const data = useSelector(state => state.skills);

    return (
    <div className="container main-skills">
        <div className="row">
            <div className="col-12">
                <h2>Over 1600 skills and growing</h2>
            </div>

            {
                (data || []).map(item => {
                    return (
                        <div className="col-md-2 col-6" key={item.id}>
                            <Image src={item.img} />
                            <h3>{item.title}</h3>
                            <hr />
                            {
                                (item.linkTitle || []).map(link => {
                                    return (
                                        <a href=" " key={link.id}>
                                            {link.linkName}
                                        </a>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}


export default Skills;