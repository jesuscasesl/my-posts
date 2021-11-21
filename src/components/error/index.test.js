import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Error } from './index'


test('Render Content Component Error', () => {
	const msg = 'Error'

	const component = render( <Error />)

	expect(component.container).toHaveTextContent(msg)
})
