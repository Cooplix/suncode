import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import {history} from '@helpers/history.helper';
import {store} from '../../store';
import Routing from 'containers/Routing';
import 'semantic-ui-css/semantic.min.css';

const App: React.FC = () => (
  <Provider store={store}>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="bottom-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      closeOnToastrClick
    />
    <Router history={history}>
      <Routing isLoading={false}/>
    </Router>
  </Provider>
);

export default App;
