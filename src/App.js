import React,{ Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  // state = {
  //   name:"Aya",
  //   age:22
  // }
  constructor(){
    super();
    this.state={
      monsters : [],
      searchField : ""
    };
  }

 componentDidMount(){
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(Response => Response.json())
   .then(users => this.setState({monsters:users}))
 }

  render(){
    const {monsters , searchField} =this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox placeholder="search Monsters" handleChange={(e)=> this.setState({searchField : e.target.value})}/>
        <CardList monsters={filteredMonsters}/>
        
        <button onClick={() => this.setState({name:"wafaa", age:21 })}>change state</button>
      </div>
    )
  }
}

export default App;
