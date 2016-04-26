import { TextField } from 'meteor/zetoff:astroforms';

import ReactInput from './input.js';
import TextFieldComponent from './components/textfield.jsx';

class ReactTextField extends ReactInput(TextField) {

}

ReactTextField.component = TextFieldComponent;

export default ReactTextField;
