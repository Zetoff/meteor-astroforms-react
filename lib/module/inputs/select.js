import { Select } from 'meteor/zetoff:astroforms';

import ReactInput from './input.js';
import SelectComponent from './components/select.jsx';

class ReactSelect extends ReactInput(Select) {

}

ReactSelect.component = SelectComponent;

export default ReactSelect;
