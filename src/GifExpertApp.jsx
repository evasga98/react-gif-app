import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Modern Family'])

    const onAddCategory  = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;
        setCategories( [newCategory, ...categories] )
        // setCategories( cat => [...cat, 'Modern Family'])
    }

    return (
        <>

        {/* title */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory 
            onNewCategory = { event => onAddCategory(event) }
        />


        {/* gifs list */}
        { 
            categories.map( ( category ) => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            ))
        }

        </>
    )
}
