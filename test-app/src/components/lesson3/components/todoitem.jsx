import Styles from '../assets/css/TodoItem.module.css';
import cn from 'classnames';

function TodoItem(props){
    const completed = props.completed;
    return <div className={cn(Styles.item, {[Styles.completed]: completed})}>{props.value}</div>
}

export default TodoItem