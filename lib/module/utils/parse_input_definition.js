import { Module } from 'meteor/jagi:astronomy';
import { Match } from 'meteor/check';
import React from 'react';

const throwParseError = Module.get('core').utils.throwParseError;

function getComponent(inputDefinition, fieldName, className) {
  let component = null;
  if (Match.test(inputDefinition, Object)) {
		if (_.has(inputDefinition, 'component')) {
      // field specific component
      component = inputDefinition.component;
      if (!React.Component.isPrototypeOf(component)) {
        throwParseError([{
            'class': className
          }, {
            'property': 'fields'
          }, {
            'field': fieldName,
          }, {
            'property': 'input'
          }, {
            'property': 'component'
          },
          'Component must be a React.Component'
        ]);
      }
    }
  }
  return component;
}

function parseInputDefinition(fieldDefinition, fieldName, className) {
  if (!Match.test(fieldDefinition, Object)) {
    return;
  }
  if (!fieldDefinition.hasOwnProperty('input')) {
    return;
  }

  const inputDefinition = {
    component: getComponent(fieldDefinition.input, fieldName, className),
  };

  return inputDefinition;
}

export default parseInputDefinition;
