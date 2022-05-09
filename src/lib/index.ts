import { App } from "vue";
import JwButton from "./button/index.vue";
export {
  JwButton
};

const components = [
  JwButton,
];

export function registerJwUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}

export default registerJwUi;