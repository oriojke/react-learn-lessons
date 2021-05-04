import TodoItem from "./todoitem";
import styles from '../assets/css/TodoList.module.css';

function TodoList(props){
    return <ul styleName={styles.list}>{
            props.inArray.map(curr => <TodoItem key={curr[0]} value={curr[0]} completed={curr[1]}></TodoItem>)
        }</ul>;
}

export default TodoList;