import React, {useState} from 'react';
import './App.css';
import {  Input, Button, Segment, Menu, Container } from 'semantic-ui-react';
import Card from './Card';

const App=()=> {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData]= useState([])

   async function handleSubmit(e){
     e.preventDefault();
     console.log("handlesubmit", searchValue);
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
    (console.log("data", data));
}
  return (
    <div className="App">
      <Menu inverted>
        <Container ><Menu.Item name='Simple Search Service' />
        </Container>
      </Menu>
      <Segment >
        <Input type="search" placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <Button type="submit" onClick={handleSubmit}>Search</Button>
      </Segment>
      <Card data={data}/>
    </div>
  );
}

export default App;
