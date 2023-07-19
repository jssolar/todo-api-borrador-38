import ReactDom from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App";

ReactDom.createRoot(document.querySelector('#root')).render(<App />)