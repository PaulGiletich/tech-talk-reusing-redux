import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { epic } from "./epic";
import { rootReducer } from "./reducer";

const epicMiddleware = createEpicMiddleware();

const middleware = composeWithDevTools(applyMiddleware(epicMiddleware));

export const store = createStore(rootReducer, middleware);

epicMiddleware.run(epic);
