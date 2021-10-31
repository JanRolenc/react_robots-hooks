import React, { Component } from "react";//!!!
import CardList from '../components/CardList';
// import { robots } from './robots'; toto v dalsi fazi nahrazujeme za https://jsonplaceholder.typicode.com/users, abychom jakoze stahovali z externiho serveru
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';


class App extends Component {//!!!pokud mam v kodu state, tak uz je to tzv. smart komponenta a musim pouzit class
    constructor() {
        super()
        this.state = {
            //robots: robots,//toto by tu nemuselo byt, protoze ted pouzivam roboty ze souboru a nemeni se, ale vyhledove budou z databaze a ta se muze menit, jak se bude neco zadavat taky uzivatelem
            robots: [], //kdyz chceme users fetchovat, tak dame tady prazdne pole misto robots a pouzijeme componentDidMount viz nize
            searchfield: ""
        }
    }
    //detaily jsou na netu pod Components Lifecycle Methods; tuto metodu pouzijeme pro natahovani dat z externiho serveru
    componentDidMount() {//toto je jedna z component metod, stejne jako construktor nebo render, takze ani nevolame arrow funkci
        fetch("https://jsonplaceholder.typicode.com/users")//natahuju z externiho API; cele je to syntax, netreba nad tim dumat; fetch patri k window object
            .then(response => response.json()) //puvodne byla syntaxe s return a {}, ale jde to i bez
            .then(users => this.setState({ robots: users }));           //stahujeme usery misto robotu
    }

    onSearchChange = (event) => {// !!! puvodne tu mel onSearchChange(event), ale udajne musime takto, aby bylo jasne, k cemu se vztahuje this; pry je to obvykla chyba 
        this.setState({ searchfield: event.target.value });//!!! pozor na syntax!!! toto je taky pravidlo - musim nastavit state pomoci setState timto zpusobem

    }
    //abych nize nedaval tolikrat this.state, tak mohu pomoci destructuring:
    //const {robots, searchfield} = this.state;
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        //!!
        //if-else nize by se dalo profi zlepsit:
        //return !robots.length ?             -----> robots.length vraci false, pokud je === 0; tedy s ! vraci true a vraci loading; jinak nacita App
        //<h1>Loading...</h1>
        //:                                     
        //(
        // <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        //         <div style={{ flexDirection: "column" }}>
        //             <h1>RoboFriends</h1>
        //             <SearchBox searchChange={this.onSearchChange} />
        //         </div>
        //         <Scroll>
        //             <CardList robots={filteredRobots} />
        //         </Scroll>

        //     </div>
        // );

        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ flexDirection: "column" }}>
                        <h1>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                    </div>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>

                </div>
            );
        }
    }
}
export default App;