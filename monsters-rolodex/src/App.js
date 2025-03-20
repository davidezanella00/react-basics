import React from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import './App.css';

const App = () => {

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // non dependencies because we want to run this effect only once
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);


  // dependencies because we want to run this effect when searchField or monsters change :
  //  1. if we don't add monsters as a dependency, the effect will run only when searchField changes,
  //     (monsters appear after one character is typed).
  //  2. if we don't add searchField as a dependency, the effect will run only when monsters change, so no filtering will be done.
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      const monsterName = monster.name.toLowerCase();
      return monsterName.includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);


  const onSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchField(value);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        placeholder='search monsters'
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

/* class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
    //console.log('constructor');
  }

  onSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    this.setState({ searchField: value });
  }

  componentDidMount() {
    //console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState({ monsters: users })
      );
  }

  render() {
    //console.log('render');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      const monsterName = monster.name.toLowerCase();
      return monsterName.includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className='monsters-search-box'
          placeholder='search monsters'
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
 */
export default App;