import {Module} from 'meteor/jagi:astronomy';
// Hooks.
import onInitSchema from './hooks/init_schema.js';
import onInitDefinition from './hooks/init_definition.js';
import onParseDefinition from './hooks/parse_definition.js';
import onMergeDefinitions from './hooks/merge_definitions.js';
import onApplyDefinition from './hooks/apply_definition.js';
import onInitClass from './hooks/init_class.js';
//utils
import parseInputDefinition from './utils/parse_input_definition.js';

Module.create({
  name: 'astroforms-react',
  onInitSchema,
  onInitDefinition,
  onParseDefinition,
  onMergeDefinitions,
  onApplyDefinition,
  onInitClass,
  utils: {
    parseInputDefinition,
  }
});
