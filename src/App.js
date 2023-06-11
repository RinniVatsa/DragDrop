import React, { useState } from 'react';
import './App.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import Container from "@mui/material/Container";

const App= () => {
  const [sourceItems, setSourceItems] = useState([
    { id: 1, name: 'Parth' },
    { id: 2, name: 'Rini' },
    { id: 3, name: 'Java' },
    { id: 4, name: 'React' },
  ]);

  const [destinationItems, setDestinationItems] = useState([]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, destination) => {
    e.preventDefault();

    const droppedItem = JSON.parse(e.dataTransfer.getData('text/plain'));

    if (destination === 'source') {
      const updatedSourceItems = sourceItems.filter((item) => item.id !== droppedItem.id);
      
      setSourceItems(updatedSourceItems);
      
    } else if (destination === 'destination') {
      const updatedDestinationItems = [...destinationItems, droppedItem];
      setDestinationItems(updatedDestinationItems);
     alert("success")
    }
    const updatedSourceItems = sourceItems.filter((item) => item.id !== droppedItem.id);
  setSourceItems(updatedSourceItems);
  };

  const handleDeleteAll = () => {
    setSourceItems([]);
    setDestinationItems([]);
  };

  return (
    <div className="App">
      <h2>DRAG DROP</h2>
      <Container fixed>
      <div style = {{ backgroundColor: "Plum", height: "100", width: "100%" }}
  
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, 'source')}
      >
        <h3>Items 1</h3>
        <ul>
          {sourceItems.map((item) => (
            <li
              key={item.id}
              className="item"
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      </Container>
      <Container fixed>
      <div style = {{ backgroundColor: "Silver", height: "100", width: "100%" }}
     
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, 'destination')}
      >
        <h3> Items2</h3>
        <ul>
          {destinationItems.map((item) => (
            <li key={item.id} className="item">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      </Container>
      
      <Stack direction="row" spacing={1}>
      <Button onClick={handleDeleteAll}variant="outlined" >
  Delete
</Button>
</Stack>
      
    </div>
  );
};

export default App;
