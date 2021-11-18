import React from 'react';
import { Button } from './Button';

const Buttons = props => {

    return props.data.map( data => {
        return (
            <Button
                key={(data.subBreed ? data.subBreed + '-' : '') + data.breed}
                breed={data.breed}
                subBreed={data.subBreed}
                getPhoto={props.getPhoto}
            />
        )
    })
}

export { Buttons };