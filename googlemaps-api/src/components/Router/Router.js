import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DemoComponent } from 'components/DemoComponent/DemoComponent';
import MapWrapper from 'components/Screens/GoogleApi/MapWrapper';
import MapView from 'components/Screens/ReactGoogleMapsApi/MapView';
import { routes } from './routes';

export const Router = () => {
  return (
    <Switch>
      <Route path={routes.googleApi}>
        <MapWrapper />
      </Route>
      <Route path={routes.communityApi}>
        <MapView />
      </Route>
      <Route path="/">
        <DemoComponent />
      </Route>
      {/* <Redirect to="/" /> */}
    </Switch>
  );
};
