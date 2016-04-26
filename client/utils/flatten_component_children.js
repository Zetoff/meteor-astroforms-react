function flattenComponentChildren(component = {}) {
  let fields = [];
  const children = component.props.children;
  if (children) {
    if (_.isArray(children)) {
      for (const child of children.values()) {
        fields.push(child);
        fields = fields.concat(flattenComponentChildren(child));
      }
    } else {
      fields.push(children);
    }
  }
  return fields;
}

export default flattenComponentChildren;
