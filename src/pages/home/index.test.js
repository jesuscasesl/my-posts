import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Home } from './index'


test('Render Content Page Home', () => {
	const component = render( <Home />)
	const textHome = "It has been used to develop the project"

	expect(component.container).toHaveTextContent(textHome)
})