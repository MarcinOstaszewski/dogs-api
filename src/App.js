import React, { useState, useEffect} from 'react';
import { Button } from './components/Button';
import axios from 'axios';
import './App.css';

function App() {

    const [buttons, setButtons] = useState({dogsRaces: []});

    const createButtons = data => {
        let dogsButtons = Object.keys(data).map( breed => {
            if (data[breed].length > 0) {
                return data[breed].map( subBreed => {
                    return <Button breed={`${subBreed} ${breed}`}/>
                })
            } else {
                return <Button breed={breed}/>
            }
        })
        setButtons(dogsButtons)
    }

    useEffect(() => {
        (async () => {
            const response = await axios('https://dog.ceo/api/breeds/list/all');
            createButtons(response.data.message);
        })();
    }, []);

    return (
        <div className = "App" >
            <header className = "App-header">
                Click on a button below to see a random photo of the dog's breed.
            </header>
            <main className = "App-main">
                {buttons}
            </main>
        </div>
    );
}

export default App;
