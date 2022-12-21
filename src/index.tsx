import { createRoot } from 'react-dom/client';
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

/* eski hali 
import {render} from "react-dom";
import App from "./App";

const root = document.querySelector("#root");

render(<App />, root); */