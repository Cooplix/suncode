import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainViewPage from '@screens/UserView/containers/ColumnViewPage';
import PublicRoute from '@components/PublicRoute';
import ColumnView from '@components/Columns';

export interface IRoutingProps {
  isLoading: boolean;
}

const Routing: React.FunctionComponent<IRoutingProps> = () => (
  <div>
    {/* {isAuthorized ? <Header /> : ''} */}
    <Switch>
      <PublicRoute exact path="/column/:columnId" component={ColumnView}/>
      <div>
        <Switch>
          <Route path="*">
            <PublicRoute exact path="*" component={MainViewPage}/>
          </Route>
        </Switch>
      </div>
    </Switch>
  </div>
);

export default Routing;
