import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Header } from './index'


test('Render Content Component Header', () => {
	const msg = 'Posts and Users'

	const component = render( <Header />)

	expect(component.container).toHaveTextContent(msg)
})
