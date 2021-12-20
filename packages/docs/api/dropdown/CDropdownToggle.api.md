### CDropdownToggle

```jsx
import { CDropdownToggle } from '@coreui/bootstrap-vue'
// or
import CDropdownToggle from '@coreui/bootstrap-vue/src/components/dropdown/CDropdownToggle'
```

#### Props

| Prop name     | Description                                                                                                                                                                                                   | Type    | Values                                                                                          | Default  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------- | -------- |
| **active**    | Toggle the active state for the component.                                                                                                                                                                    | boolean | -                                                                                               | false    |
| **color**     | \* Sets the color context of the component to one of Bootstrap Vue’s themed colors.                                                                                                                           | string  | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'` |          |
| **caret**     | Enables pseudo element caret on toggler.                                                                                                                                                                      | boolean | -                                                                                               | true     |
| **component** | Component used for the root node. Either a string to use a HTML element or a component.                                                                                                                       | string  | -                                                                                               | 'button' |
| **disabled**  | Toggle the disabled state for the component.                                                                                                                                                                  | boolean | -                                                                                               |          |
| **size**      | Size the component small or large.                                                                                                                                                                            | string  | `'sm'`, `'lg'`                                                                                  | -        |
| **split**     | Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` className for proper spacing around the dropdown caret. | boolean | -                                                                                               |          |
| **variant**   | Set the button variant to an outlined button or a ghost button.                                                                                                                                               | string  | `'ghost'`, `'outline'`                                                                          | -        |
