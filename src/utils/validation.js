import { createElement } from 'react'
export const validate = (name) => (name !== undefined ? 'is-invalid' : '')
export const renderFeedback = (name) =>
  createElement(
    'div',
    { className: 'invalid-feedback' },
    name !== undefined ? name[0] : '',
  )
