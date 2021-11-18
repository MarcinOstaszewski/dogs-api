import React from 'react';
import { capitalise } from '../helpers/helperFunctions';

const Modal = props => {
    const display = props.display ? 'flex' : 'none';
    const {breed = '', subBreed = ''} = props.breed;
    const title = capitalise(breed + ' ' + subBreed);

    return (
        <div className="App-modal" style={{display: display}}>
            <div className="modal-content">
                <span className="modal-close" onClick={props.hideModal}>&times;</span>
                <img src={props.src} alt={title}  />
                <div
                    className="modal-button"
                    data-breed={breed}
                    data-sub-breed={subBreed}
                    onClick={props.getPhoto}
                >
                    Get another photo of <strong>{title}</strong>
                </div>
            </div>
        </div>
    )
}

export { Modal };