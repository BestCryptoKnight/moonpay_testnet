// import node modules
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

// import mui modules
import { ThemeProvider } from '@mui/material';

// import pages
import { MainPage } from './pages';

// import constants
import { PATH } from './constants';

// import styles
import { lightTheme } from './styles'

// import store
import { store } from './state/store';

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <Routes>
          <Route path={PATH.MAIN} element={<MainPage />}></Route>
              <Route path="*" element={<MainPage />}></Route>
        </Routes>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
