import { useSelector } from 'react-redux';
import Task from '../Task/Task.jsx';
import css from './TaskList.module.css';
import { selectVisibleTask } from '../../redux/tasksSlice.js';
// import { selectTextFilter } from '../../redux/filterSlice.js';

export default function TaskList() {
//   const tasks = useSelector(/*(state) => state.tasks.items*/ selectTask);
//   const textFilter = useSelector(/*(state) => state.filters.text)*/ selectTextFilter);

//   const visibleTask = tasks.filter(task =>
//     task.text.toLowerCase().includes(textFilter.toLowerCase()),
//   ); замінюємо на складний селектор дивись нижче

const tasks = useSelector(selectVisibleTask)



  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
