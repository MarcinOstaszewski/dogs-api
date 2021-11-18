import React from 'react';
import { capitalise } from '../helpers/helperFunctions';

const Button = props => {

    const title = capitalise((props.subBreed ? props.subBreed + ' ' : '') + props.breed);

    return (
        <div
            className="App-button"
            onClick={props.getPhoto}
            data-breed={props.breed}
            data-sub-breed={props.subBreed}
            key={(props.subBreed ? props.subBreed + '-' : '') + props.breed}
        >
            {title}
        </div>
    )
}

export { Button };