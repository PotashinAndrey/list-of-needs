import React from 'react';
import Information from './Utils/Information/Information.jsx';
import TotalScore from './Utils/TotalScore/TotalScore.jsx';
import Search from './Utils/Search/Search.jsx';
import List from './Utils/List/List/List.jsx';
import {styles} from './styles.js';


function App() {

  return (
    <div style={styles.Body}>
      <List style={styles.List} />
      <TotalScore style={styles.Score} />
      <Search style={styles.Search} />
      <Information style={styles.Info} />
    </div>
  );
}

export default App;