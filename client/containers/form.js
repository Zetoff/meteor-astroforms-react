import React from 'react';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import { Match } from 'meteor/check';

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

  onData(null, props);
};

export default composeAll(
  composeWithTracker(formContainer),
  useDeps()
)(Form);
