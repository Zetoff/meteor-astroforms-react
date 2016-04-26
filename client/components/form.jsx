import React from 'react';

import formContextTypes from '../utils/form_context_types.js';

class Form extends React.Component {
  getChildContext() {
    const { doc, astroClass } = this.props;
    return {
      doc: doc,
      astroClass: astroClass,
    };
  }
  render() {
    return (
      <form>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = formContextTypes;
Form.childContextTypes = formContextTypes;

export default Form;
