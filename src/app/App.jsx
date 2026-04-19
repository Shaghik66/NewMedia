import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "../store/store";
import router from "./routes/routes";
import "./style/style.css"

function App() {
  return (
    <main className="mainContainer">
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </main>
  );
}

export default App;
