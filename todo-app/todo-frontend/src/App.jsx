import './App.css';
import TodoView from './Todos/TodoView'

function App() {
  console.log(import.meta.env.VITE_BACKEND_URL)
  return (
    <div className="App">
      <TodoView />
    </div>
  );
}

export default App;
