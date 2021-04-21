import React from 'react';

class ResourceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { heading: "" };
        if(this.props.editResource) {
          this.state.heading = "Edit your resource";
          this.state.submitText = "submit changes";
          this.props.receiveNewResource(this.props.editResource);
        } else {
          this.state.heading = "Create new resource";
          this.state.submitText = "add Resource";
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        const {
          createResource,
          updateResource,
          newResource,
          editResource,
          closeModal,
        } = this.props;
        e.preventDefault();
      const promiseAction =
        editResource ? () => updateResource(
                               {...newResource, _id: editResource.id } 
                             )
                     : () => createResource(newResource);

      promiseAction()
        .then( res => {
          if(res !== "fail") {
            closeModal();
          }
        });
    }

    update(field) {
      const {
        newResource: {
          title,
          description,
        },
        receiveNewResource,
        habitId,
      } = this.props;

        return e => {
          receiveNewResource({
            title,
            description,
            habitId,
            [field]: e.currentTarget.value,
          });
        }
    }

    render() {
      const { newResource: {
          title,
          description,
        },
      } = this.props;
      const { heading, submitText } = this.state;
        return (
            <div>
                <h3>{heading}</h3>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={this.update('title')} />
                  <label>
                    Description
                  </label>
                  <textarea className="text"
                    value={description}
                    onChange={this.update('description')} />
                  <button>
                    {submitText}
                  </button>
                </form>
            </div>
        )
  }
}

export default ResourceForm
