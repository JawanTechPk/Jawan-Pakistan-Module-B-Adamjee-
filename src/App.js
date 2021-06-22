import AppRouter from './config/router'
import store from './store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
