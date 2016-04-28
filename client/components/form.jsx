import React from 'react';
import _ from 'lodash';

import Field from '../containers/field.js';
import formContextTypes from '../utils/form_context_types.js';

class Form extends React.Component {
  /**
   * Set context for form's children.
   *
   * @return {object} Child context
   * @override
   */
  getChildContext() {
    const { doc, astroClass } = this.props;
    return {
      doc: doc,
      astroClass: astroClass,
    };
  }
  /**
   * Return an array with the names of the fields to omit.
   *
   * @return {Array} Fields to omit
   */
  getFieldsToOmit() {
    let fieldsToOmit = this.props.omitFields;
    if (_.isString(fieldsToOmit)) {
      fieldsToOmit = fieldsToOmit.split(',');
    }
    return _.isArray(fieldsToOmit) ? fieldsToOmit : [];
  }
  /**
   * Get children components for this form. In case no children are specified,
   * return all fields for this component's ```astroClass``` but those listed in the
   * ```omitFields``` property.
   *
   * @return {Object|Array} Component children
   */
  getChildren() {
    if (this.props.children) {
      // custom fields, show childs
      return this.props.children;
    } else {
      // no children specified, show all fields
      const fieldExceptions = this.getFieldsToOmit();
      return _.map(this.props.astroClass.getInputsNames(), (fieldName) => {
        if (_.indexOf(fieldExceptions, fieldName) < 0) {
          return (
            <Field key={fieldName} name={fieldName} />
          );
        }
      });
    }
  }
  render() {
    return (
      <form>
        {this.getChildren()}
      </form>
    );
  }
}

Form.propTypes = formContextTypes;
Form.childContextTypes = formContextTypes;

export default Form;
