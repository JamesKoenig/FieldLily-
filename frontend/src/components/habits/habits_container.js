import { connect } from 'react-redux';
import { fetchHabits } from '../../actions/habit_actions';
import {
  openNewHabitModal,
} from '../../actions/modal/habit_modal_actions';
import Habits from './habits';

const mapStateToProps = (state) => {
  return {
    habits: Object.values(state.entities.habits.all),
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.habit,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHabits: () => dispatch(fetchHabits()),
    openNewHabitModal: () =>
      dispatch(openNewHabitModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Habits);
