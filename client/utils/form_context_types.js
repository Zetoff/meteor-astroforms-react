import React from 'react';
import { Astro } from 'meteor/jagi:astronomy';

export default {
  doc: React.PropTypes.instanceOf(Astro.Class),
  astroClass: function isValidAstroClass(props, propName, componentName) {
    if (!Astro.Class.isParentOf(props[propName])) {
      return new Error('Invalid property `' + propName + '` supplied to' +
          ' `' + componentName + '`. Must be a valid Astronomy Class.');
    }
  },
};
