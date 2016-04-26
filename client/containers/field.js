import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Field from '../components/field.jsx';

export const fieldContainer = (props, onData) => {
  onData(null, props);
};

export default composeAll(
  composeWithTracker(fieldContainer),
  useDeps()
)(Field);
