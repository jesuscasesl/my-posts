import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Footer } from './index'


test('Render Content Component Footer', () => {
	const msg = 'Develop witch'

	const component = render( <Footer />)

	expect(component.container).toHaveTextContent(msg)
})
