import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from "react-bootstrap";
import {  fetchCategories } from "../Redux/actions";

const Categories = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const data = useSelector(state => state.categories);

    return (
    <div className="categories">
        <div className="container">
            <div className="row">
                <div className="tittle-categories col-12 text-center">
                    <h2>Get work done in over 1350 different categories</h2>
                </div>
                <>
                    {
                        data.map(item => {
                            return (
                                <div className="col-md-1 col-4 inner-categories">
                                    <Image src={item.img} />
                                    <p>{item.title}</p>
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


export default Categories;