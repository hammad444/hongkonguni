import React from 'react';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import {Store} from './redux/Store';
import {Provider} from 'react-redux';

class App extends React.Component{
  render(){
    // Store.subscribe(()=>console.log(Store.getState()))
    return (
      <BrowserRouter>
        <Provider store={Store}>
        <div>
          <Main/>
        </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
