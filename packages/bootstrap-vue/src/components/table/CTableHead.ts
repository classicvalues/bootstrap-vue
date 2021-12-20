import { defineComponent, h } from 'vue'

import { Color } from '../props'

const CTableHead = defineComponent({
  name: 'CTableHead',
  props: {
    /**
     * * Sets the color context of the component to one of Bootstrap Vue’s themed colors.
     *
     * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
     */
    color: Color,
  },
  setup(props, { slots }) {
    return () =>
      h(
        'thead',
        {
          class: [
            {
              [`table-${props.color}`]: props.color,
            },
          ],
        },
        slots.default && slots.default(),
      )
  },
})

export { CTableHead }
