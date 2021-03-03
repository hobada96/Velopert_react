import './App.css';
import { createStore} from 'redux';
const initalState = {
  counter: 0,
  text : '',
  list : []
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

function increase(){
  return {
    type: INCREASE
  }
}

function App() {
  return (

  );
}

export default App;
