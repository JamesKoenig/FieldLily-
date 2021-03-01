import React from 'react';
import { withRouter } from 'react-router-dom';
import HabitBox from './habit_box';
import HabitCompose from './habit_compose_container'

class Habit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchHabits();
  }

  render() {
    const { habits } = this.props;
    if (!habits || habits.length < 1) {
      return (<div>There are no Habits
                  <HabitCompose />
      </div>)
    } else {
      return (
        <div>
          <h1>All Habits</h1>
          { habits.map(habit => (
            <HabitBox key={habit._id} {...habit} />
          ))}
          <HabitCompose />
        </div>
      );
    }
  }
}

export default withRouter(Habit);
