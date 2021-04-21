import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundPage from '../error-pages/not_found_page'
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
      return <NotFoundPage />;
    return (
      <div className="resource-show-container">
         <div className="resource-show">
            <h1>{resource.title}</h1>
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
            <p>belongs to habit {habit.title}</p>
        </div>
        <Link to="/" />
      </div>
    );
  }
}

export default ResourceShow;

