import { useState } from "react"

export const AddCategory = (  { onNewCategory }  ) => {

    const [inputValue, setinputValue] = useState('Modern Family')

    const onInputChange = ( event ) => {
        setinputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim()
        if( newInputValue.length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories])
        setinputValue('')
        onNewCategory( newInputValue );

    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Search Gifs"
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>

    )
}
