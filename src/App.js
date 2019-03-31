import React,{Component} from 'react'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import myReducer from './reducers/index'
import Test from './components/Test'
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(myReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(root)
// const store = createStore(myReducer);
class App extends Component{
  render(){
    return(
      <Provider store={store} >
       
          <Test/> 
        
      </Provider>
    );
  }
}
export default App;