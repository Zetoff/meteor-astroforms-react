import React from 'react';
import _ from 'lodash';

import formContextTypes from '../utils/form_context_types.js';

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validation: {},
    };
  }
  /**
   * Full document's field value update. Performs set, validation and auto save
   * processes.
   *
   * @param {mixed} value
   *  Value to set
   * @uses setFieldValue
   * @uses validateField
   * @uses saveDoc
   */
  updateField(value) {
    this.setFieldValue(value);
    if (this.validateField() && this.getInput().autoSave) {
      this.saveDoc();
    }
  }
  /**
   * Set document's field value.
   *
   * @param {mixed} value
   *  Value to set
   */
  setFieldValue(value) {
    this.context.doc.set(this.props.name, value);
  }
  /**
   * Validate this document field and set validation results to the state so it
   * can be passed to the child component.
   *
   * @return {Boolean}
   *  true if validation success, false otherwise
   */
  validateField() {
    return this.context.doc.validate({fields: this.props.name}, (err) => {
      if (err) {
        this.setState({
          validation: {
            state: 'error',
            message: err.reason,
          }
        });
        return false;
      } else {
        this.setState({
          validation: {
            state: 'success',
            message: null,
          }
        });
        return true;
      }
    });
  }
  /**
   * Saves document.
   * TODO
   */
  saveDoc() {}
  getHtmlAttributes() {
    // retrieve html attr, but give priority to the recieved ones
    const htmlAttributes = _.extend({
      ref: this.props.name,
    }, this.getInput().getHtmlAttributes());
    return _.mapValues(htmlAttributes, (value, name) => {
      return this.props[name] || value;
    });
  }
  getValue() {
    // try to retrieve the document value first
    if (this.context.doc) {
      return this.context.doc.get(this.props.name);
    }
    // try to retrieve input default, but give priority to recieved prop
    else if (_.has(this.getInput(), 'default')) {
      return this.props.default || this.getInput().default;
    }
  }
  getInput() {
    return this.context.astroClass.getInput(this.props.name);
  }
  getField() {
    return this.context.astroClass.getField(this.props.name);
  }
  getInputProps() {
    // retrieve input props, but give priority to the recieved ones
    return _.mapValues(this.getInput().getProps(), (value, name) => {
      return this.props[name] || value;
    });
  }
  getInputComponentProps() {
    return _.extend({
      value: this.getValue(),
      htmlAttributes: this.getHtmlAttributes(),
      validation: this.state.validation,
    }, _.omit(this.props, 'context', 'actions'), this.getInputProps());
  }
  render() {
    const InputComponent = this.props.inputComponent || this.getInput().component;
    if (InputComponent) {
      return (
        <InputComponent {...this.getInputComponentProps()} />
      );
    } else {
      console.error("No React.component for field `" + this.props.name + "`");
    }
  }
}

Field.propTypes = {
  name: React.PropTypes.string.isRequired,
};
Field.contextTypes = formContextTypes;

export default Field;
