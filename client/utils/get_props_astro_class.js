import { Class } from 'meteor/jagi:astronomy';

/**
 * Retrieves astro class from recieved object by first trying to do it from
 * the ```doc``` property, and then from ```astroClass``` property.
 * 
 * @param  {object} props
 *  Props object. Expected properties: ```doc``` and ```astroClass```.
 * @return {Astro.Class|undefined}
 *  Astronomy class, undefined if could not retrieve it or invalid.
 */
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
