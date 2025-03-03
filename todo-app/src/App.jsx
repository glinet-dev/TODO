import { Provider } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col md:flex-row w-full max-w-6xl space-y-6 md:space-y-0 md:space-x-6 component-container">
        {/* AddTodo Component */}
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
          <AddTodo />
        </div>

        {/* Todos Component */}
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-6 component-container-todo-list">
          <Todos />
        </div>
      </div>
    </Provider>
  );
}

export default App;