import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import GlobalState from './GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalState>
        {/* <Header done={5} all={10} /> */}
        <Header />
        <main>
          <Input />
          <List />
        </main>
      </GlobalState>
    </div>
  );
}

export default App;
