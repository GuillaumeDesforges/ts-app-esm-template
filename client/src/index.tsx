import { createRoot } from 'react-dom/client';
import {App} from './App';

console.log("React app loading")
const container = document.querySelector("#app-root");
const root = createRoot(container);
root.render(<App />);
