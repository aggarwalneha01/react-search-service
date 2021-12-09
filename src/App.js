import React, {useState} from 'react';
import './App.css';
import {  Input, Button, Segment, Header } from 'semantic-ui-react';
import Card from './Card';

const App=()=> {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData]= useState([])

   async function handleSubmit(e){
     e.preventDefault();
     const res = await fetch("http://localhost:8080/api/search", {
      body: JSON.stringify({
        searchTerm: searchValue
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const response = await res.json();
    setData(response);
}
  return (
    <div className="App" >
      <Header size="large" textAlign='center' color="blue">
        <Header.Content content='Simple Search Service' >
        </Header.Content>
      </Header>
      <Segment >
        <Input icon='search' type="search" placeholder="Search..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} color="blue"/>
        <Button primary type="submit" onClick={handleSubmit}>Search</Button>
      </Segment>
      <Card data={data}/>
    </div>
  );
}

export default App;
