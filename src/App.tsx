import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Counter } from "./counter/components/Counter";
import { store } from "./store/store";

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Counter />
            </div>
        </Provider>
    );
};

export default App;
