import checkReactComponent from '../utils/check_react_component.js';

const ReactInput = (Input) => class extends Input {
  constructor(definition = {}) {
    super(definition);
    this.component = definition.component;
  }
  getDefaultComponent() {
    return this.constructor.component;
  }
  getComponentOrDefault(component) {
    return component ? component : this.getDefaultComponent();
  }
  // getters and setters
  set component(component) {
    // if component is null take default component
    component = this.getComponentOrDefault(component);
    checkReactComponent(component);
    this._props.component = component;
  }
  get component() {
    return this.getComponentOrDefault(this._props.component);
  }
  // static methods
  static set component(component) {
    checkReactComponent(component);
    this._component = component;
  }
  static get component() {
    return this._component;
  }
};

export default ReactInput;
