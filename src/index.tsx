import ReactDOM from 'react-dom/client';
import App from './App';

const rootNode = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootNode);

root.render(<App />);
