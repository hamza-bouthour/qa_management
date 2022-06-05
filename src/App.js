// import '../src/css/App.scss';
import { BrowserRouter} from 'react-router-dom';
// import Main from './components/mainComponent';
// import { Provider } from 'react-redux';
// import { ConfigureStore } from '../src/redux/ConfigureStore';

// const store = ConfigureStore();

import Main from './components/Main';
import '../src/css/main.scss'

function App() {
  return (
    // <Provider store={store}>
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
