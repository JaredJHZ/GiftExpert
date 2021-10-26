import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpertApp = (props) => {

    const [categories, setCategories] = useState(['Kimetsu no yaiba'])

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr/>

            <AddCategory setCategories={setCategories}/>

            <ol>
                {
                    categories.map(
                        category => <GiftGrid   key={category} category={category}/> 
                        )
                }
            </ol>

        </>
    )
}

export default GiftExpertApp