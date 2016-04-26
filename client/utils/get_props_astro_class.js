import { Class } from 'meteor/jagi:astronomy';

function getPropsAstroClass(props) {
  let astroClass;
  if (_.isObject(props.doc) && (props.doc instanceof Class)) {
    astroClass = props.doc.constructor;
  } else if (Class.isParentOf(props.astroClass)) {
    astroClass = props.astroClass;
  }
  return astroClass;
}

export default getPropsAstroClass;
