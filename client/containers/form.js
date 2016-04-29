import React from 'react';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import { Match } from 'meteor/check';
import { Class as AstroClass } from 'meteor/jagi:astronomy';

import Form from '../components/form.jsx';
import getPropsAstroClass from '../utils/get_props_astro_class.js';
import flattenComponentChildren from '../utils/flatten_component_children.js';

export const formContainer = (originalProps, onData) => {
  const props = _.extend({}, originalProps);

  // retrieve astronomy class form props
  const astroClass = props.astroClass = getPropsAstroClass(props);
  if (!astroClass) {
    throw new Error("A valid Astronomy document or class must be specified in 'doc' or 'astroClass' properties");
  }

  // create a new document if none is specified
  if (!(props.doc instanceof AstroClass)) {
    props.doc = new astroClass();
  }

  onData(null, props);
};

export default composeAll(
  composeWithTracker(formContainer),
  useDeps()
)(Form);
