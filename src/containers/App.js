import React, { useState, useEffect } from "react";
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    // const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { setRobots(users) });
    }, [])//tady musim dat druhy parametr - prazdne pole - protoze useEffect se spousti kazdym renderem 
    //a tak by se to spoustelo stale dokola; nepomohlo by ani kdybych misto [] dal robots, nebo searchfield
    //jinymi slovy rika, ze to [] je shortcut pro componentDidMount
    //druhy parametr by mel specifikovat, na cem bude spusteni useEffektu zaviset - napr. dam tlacitko 
    //s onClick nekde dolu do DOM a novou state promennou count, setCount a nasledne do useEffect jako druhy
    //param [count] - toto by zpusobilo, ze fetch probehne vzdy az po stisku tlacitka  

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);

    }
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
        !robots.length
            ?
            <h1>Loading...</h1>
            : (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ flexDirection: "column" }}>
                        <h1>RoboFriends</h1>
                        {/* <button onCLick={() => setCount(count+1)}></button> */}
                        <SearchBox searchChange={onSearchChange} />
                    </div>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
    );
}

export default App;