import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-bootstrap';
import { fetchFavorites } from '../Redux/actions'

const Favorites = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFavorites());
    }, [dispatch])

    const data = useSelector(state => state.favorites);

    return (
    <div className="favorites">
        <div className="container text-center">
            <div className="row">
                <div className="col-12 tittle">
                    <h2>Turn your dreams into reality with Freelancer</h2>
                    <p>Here are some of our most popular projects:</p>
                </div>
                    {
                        data.map(item => {
                            return (
                                <div className="inner-favorites col-md-4" key={item.id}>
                                    <div className="logo">
                                        <Image src={item.img} />
                                        <a href=" "> Post a contest like this </a>
                                    </div>
                                    <div className="details">
                                        <h5>{item.title}</h5>
                                        <p>{item.details}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    </div>
    )
}


export default Favorites;