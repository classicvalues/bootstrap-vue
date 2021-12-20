### CFormTextarea

```jsx
import { CFormTextarea } from '@coreui/bootstrap-vue'
// or
import CFormTextarea from '@coreui/bootstrap-vue/src/components/form/CFormTextarea'
```

#### Props

| Prop name       | Description                                                                                                                                                                 | Type    | Values | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | ------- |
| **disabled**    | Toggle the disabled state for the component.                                                                                                                                | boolean | -      |         |
| **invalid**     | Set component validation state to invalid.                                                                                                                                  | boolean | -      |         |
| **model-value** | The default name for a value passed using v-model.                                                                                                                          | string  | -      | -       |
| **plain-text**  | Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`. | boolean | -      |         |
| **readonly**    | Toggle the readonly state for the component.                                                                                                                                | boolean | -      |         |
| **valid**       | Set component validation state to valid.                                                                                                                                    | boolean | -      |         |

#### Events

| Event name             | Description                                                                    | Properties |
| ---------------------- | ------------------------------------------------------------------------------ | ---------- |
| **change**             | Event occurs when the element loses focus, after the content has been changed. |
| **input**              | Event occurs immediately after the value of a component has changed.           |
| **update-model-value** | Emit the new value whenever there’s an input or change event.                  |
