// import logo from './logo.svg';
import './App.css';
// import Welcome from './components/Welcome';
import TestButton from './components/lesson2/TestButton'
import TestButtonNegative from './components/lesson2/TestButtonNegative';
import TestButtonOuterHander from './components/lesson2/TestButtonOuterHandler';
import Conditional from './components/lesson2/Conditional';
import ListsTest from './components/lesson2/ListsTest';
import Header from './components/lesson3/components/header';
import TodoList from './components/lesson3/components/todolist';

function App() {
  var testval = false;
  return (
    <>
    <h1>Играемся с компонентами</h1>
    <div id="event-handling">
      <TestButton></TestButton>
      <TestButtonNegative></TestButtonNegative>
      <TestButtonOuterHander clickHandler={function(e){alert("Outer click handler");}} arg2={{a:1,b:2}}></TestButtonOuterHander>
    </div>
    <div id="conditional-render">
      <Conditional testValue={testval}></Conditional>
    </div>
    <div id="lists">
      <ListsTest arr={[0,1,2,3,4,5]}></ListsTest>
    </div>
    <div id="todo-list">
      <Header></Header>
      <TodoList inArray={[['Задача 1', true], ['Задача 2', false], ['Задача 3', false]]}></TodoList>
    </div>
    </>
  );
}

export default App;
