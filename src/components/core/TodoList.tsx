/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Todo } from '../../Interfaces/Interface'
import SingleTodo from './SingleTodo';
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}
const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
    <div className="container grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3">
      <div className={`w-full bg-red-800 mb-3`}>
        <span>Active tasks</span>
        {todos.map((todo, index) => (
          <SingleTodo index={index} todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))}

      </div>
    </div>
  )
}
export default TodoList;
