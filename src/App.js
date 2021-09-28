import React from 'react'
import Header from './Components/Header';
import Home from './Components/Home';
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">

      <Provider store={store}>

        <Header />
        <Home />

      </Provider>

    </div>
  );
}

export default App;
