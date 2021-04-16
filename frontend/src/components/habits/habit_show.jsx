import React from 'react';
import { Link } from 'react-router-dom';
import ResourceIndexItem from '../resources/resource_index_item';
import ListGroup from 'react-bootstrap/ListGroup';

import './habit_show.css';

class HabitShow extends React.Component {
  componentDidMount() {
    const {
      fetchHabit,
      fetchHabitResources,
      match: { params: { habitId }},
    } = this.props;
    fetchHabit(habitId);
    fetchHabitResources(habitId);
  }

  render() {
    const {
      habit,
      resources,
      openNewResourceModal,
      openConfirmHabitDeleteModal,
      openEditHabitModal,
    } = this.props;
    if(!habit)
      return null;
    return (
      <div className="habit-show-container">
        <div className="habit-show-grid">
          <div className="habit-show-body">
            <h1>{habit.title}</h1>
            <button className="habit-delete"
                    onClick={() => openConfirmHabitDeleteModal(habit._id)} >
              delete habit
            </button>
            <button className="resources-index-new-button"
                    onClick={openNewResourceModal}>New Resource</button>
            <button className="edit-link"
                    onClick={() => openEditHabitModal(habit._id) } >
              Edit
            </button>
            <p>{habit.description}</p>
          </div>
          <div className="resource-component-div">
             <section>
                <h4 className="resource-title">Resources</h4>
                <ListGroup variant="flush">
                {resources.map((resource) => (
                    <ResourceIndexItem 
                        resource={resource}
                        key={resource._id}
                    />
                ))}
                </ListGroup>
            </section>
          </div>
          <Link to="/" />
        </div>
      </div>
    );
  }
}

export default HabitShow;

