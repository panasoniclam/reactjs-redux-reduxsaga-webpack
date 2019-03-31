import React,{Component} from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import myReducer from './reducers/index'
import Test from './components/Test'
const store = createStore(myReducer);

class App extends Component{
  render(){
    return(
      <Provider store={store}>
       
          <Test/>
       
      </Provider>
    );
  }
}
export default App;