import React, { useState, useEffect} from 'react';
import { Buttons } from './components/Buttons';
import { Modal } from './components/Modal';
import axios from 'axios';
import './App.css';

function App() {

    const [breedsData, setBreedsData] = useState({});
    const [src, setSrc] = useState('');
    const [alt, setAlt] = useState('');
    const [breed, setBreed] = useState({});
    const [display, setDisplay] = useState(false);

    const createButtonsData = breeds => {
        let data = [];
        Object.keys(breeds).forEach( breed => {
            if (breeds[breed].length > 0) {
                return breeds[breed].forEach( subBreed => {
                    data.push({breed, subBreed});
                });
            } else {
                data.push({breed});
            }
        });
        return data;
    }

    const getPhoto = (e) => {
        const {breed, subBreed} = e.target.dataset;
        const path = breed + (subBreed ? '/' + subBreed : '');
        (async () => {
            const response = await axios(`https://dog.ceo/api/breed/${path}/images/random`);
            setSrc(response.data.message);
            setAlt(breed + (subBreed ? ' ' + subBreed : ''));
            setBreed({breed, subBreed});
            setDisplay(true);
        })()
    }

    const hideModal = () => {
        setDisplay(false);
    }

    useEffect(() => {
        (async () => {
            const response = await axios('https://dog.ceo/api/breeds/list/all');
            setBreedsData(response.data.message);
        })();
    }, []);

    return (
        <div className = "App" >
            <header className = "App-header">
                Click on a button below to see a random photo of the dog's breed.
            </header>
            <main className = "App-main">
                <Buttons
                    data={createButtonsData(breedsData)}
                    getPhoto={getPhoto}
                    notActive={display}
                />
            </main>
            <Modal src={src}
                alt={alt}
                breed={breed}
                display={display}
                getPhoto={getPhoto}
                hideModal={hideModal}/>
        </div>
    );
}

export default App;
