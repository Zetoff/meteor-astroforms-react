import { Class } from 'meteor/jagi:astronomy';

function onApplyDefinition(Class, parsedDefinition, className) {
  _.each(parsedDefinition.components, (component, fieldName) => {
    const input = Class.getInput(fieldName);
    try {
      input.component = parsedDefinition.components[fieldName];
    } catch(err) {
      // could not retrieve default nor specific component
      // TODO refine explanation
      throw new Error(err);
    }
  });
}

export default onApplyDefinition;
