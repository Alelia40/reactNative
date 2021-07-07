import React from 'react';

import Main from './components/main';
import { Provider } from 'react-redux';
import store from './redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
}
