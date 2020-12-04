import React, {useEffect, useState} from 'react';
import TinderCard from "react-tinder-card";
import database from './firebase';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([]);

    // Piece of code which runs based on a conidtion
    useEffect(() => {
        // this is where the code runs

        //this will run ONE hen the compnent loads, and never again
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    // Bad
    // const people = [];
    // people.push('ayman', 'anas')

    // Good (push to an array in REACT)
    // setPeople([...people, 'ayman', 'anas'])

    return (
        <div>
            <div className= "tinderCards__cardContainer">
              {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                      <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default TinderCards