import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import {
  Switch,
  Route,
} from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import HabitsContainer from './habits/habits_container';
import Footer from './footer/footer';
import ProfileContainer from './profile/profile_container';
import HabitComposeContainer from './habits/habit_compose_container';
import HabitShowContainer from './habits/habit_show_container'
import ResourcesContainer from './resources/resources_container';

import ResourceShowContainer from './resources/resource_show_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <Route exact path="/habits" component={HabitsContainer} />
        <Route exact path="/habits/:habitId" component={HabitShowContainer} />
        <Route exact path="/resources" component={ResourcesContainer} />
        <Route exact path="/resources/:resourceId" component={ResourceShowContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute exact path="/new_habit" component={HabitComposeContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;
