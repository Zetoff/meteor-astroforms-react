import React from 'react';
import _ from 'lodash';

import formContextTypes from '../utils/form_context_types.js';

class Field extends React.Component {
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
