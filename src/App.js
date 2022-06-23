import Header from "./components/Header/Header";
import Navigation from "./Navigation/Navigation";
import "./App.css";

// redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Navigation />
      </div>
    </Provider>
  );
}

export default App;
