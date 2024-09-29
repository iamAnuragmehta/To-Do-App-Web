import ToDoCard from './ToDoCard'

export default function ToDoList(props) {
  const todos = props.todo

  return (
    <div className='list'>
      {todos.map((todo, todoindex) => {
          return (
            <ToDoCard {...props} key={todoindex} p={todo} index={todoindex}>
            </ToDoCard>
      )})}
    </div>
  )
}
