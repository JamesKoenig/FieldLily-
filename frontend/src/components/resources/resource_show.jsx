import React from 'react';
import { Link } from 'react-router-dom';

import './resource_show.css'

class ResourceShow extends React.Component {
  componentDidMount() {
    this.props.fetchResource();
    this.props.fetchHabits();
  }

  render() {
    const { 
      resource,
      habit,
      openEditResourceModal,
      openConfirmResourceDeleteModal,
    } = this.props;
    if(!resource || !habit)
      return null;
    return (
      <div className="resource-show-container">
         <div className="resource-show">
            <h1 style={{
                'margin-bottom': '10px',
              }}>{resource.title}</h1>
            <button className="resource-edit"
                    onClick={openEditResourceModal}>
              Edit
            </button>
            <button className="resource-delete"
                    onClick={openConfirmResourceDeleteModal}>
              Delete
            </button>
            <p>{resource.featured}</p>
            <p>{resource.description}</p>

            <Link 
              style={{
                'color': 'red',
                'display': 'block',
                'margin-top': '5px',
              }}
              to={`/habits/${resource.habit}`}>
              return to habit {habit.title}
            </Link>

        </div>
        <Link to="/" />
      </div>
    );
  }
}

export default ResourceShow;

