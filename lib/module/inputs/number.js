import { InputNumber } from 'meteor/zetoff:astroforms';

import ReactInput from './input.js';
import TextFieldComponent from './components/textfield.jsx';

class ReactNumber extends ReactInput(InputNumber) {

}

ReactNumber.component = TextFieldComponent;

export default ReactNumber;
