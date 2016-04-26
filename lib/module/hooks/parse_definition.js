import { Match } from 'meteor/check';

import parseInputDefinition from '../utils/parse_input_definition.js';

function onParseDefinition(parsedDefinition, definition, className) {
  if (!Match.test(definition.fields, Object)) {
    return;
  }

	_.each(definition.fields, function(fieldDefinition, fieldName) {
		let inputDefinition = parseInputDefinition(fieldDefinition, fieldName, className);
    if (inputDefinition) {
	    parsedDefinition.components[fieldName] = inputDefinition.component;
    }
	});
}

export default onParseDefinition;
