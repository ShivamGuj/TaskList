import { useEffect } from 'react';

import { deleteTask, getAllTasks } from '../redux/actions/index';
import { ALL_Tasks, DONE_Tasks, ACTIVE_Tasks } from '../redux/actions/type';

import { useDispatch, useSelector } from 'react-redux';


// component
import Task from './Task';
import Tabs from './Tabs';


export const Tasks = () => {

    const dispatch = useDispatch();

    const tasks = useSelector(state => state.tasks);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() => {
        dispatch(getAllTasks());
    }, [])

    const getTasks = () => {
        if (currentTab === ALL_Tasks) {
            return tasks;
        } else if (currentTab === ACTIVE_Tasks) {
            return tasks.filter(task => !task.done)
        } else if (currentTab === DONE_Tasks) {
            return tasks.filter(task => task.done)
        }
    }

    const removeDoneTasks = () => {
        tasks.forEach(({ done, _id }) => {
            if (done) {
                dispatch(deleteTask(_id));
            }
        })
    }

    return (
        <article>
            <div>
                <Tabs currentTab={currentTab} />

                {
                    tasks.some(task => task.done) ? (
                        <button
                            onClick={removeDoneTasks}
                            className="button clear"
                        >Remove Completed Tasks</button>
                    ) : null    
                }
            </div>

            <ul>
                {
                    getTasks().map(task => (
                        <Task 
                            key={task._id}
                            task={task}
                        />
                    ))
                }
            </ul>
        </article>
    )
}

export default Tasks;