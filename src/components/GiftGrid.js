import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GiftGrid =({category}) => {

    const {data, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated  animate__lightSpeedInRight">{category}</h3>

            {loading && <p>Loading</p> }
           
            <div className="card-grid animate__animated  animate__bounceIn">
        
                <ol>
                {data.map(
                    (img) => <GifGridItem key={img.id} {...img} />
                )}
                </ol>

            </div>
        </>
    )
}