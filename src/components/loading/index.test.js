import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Loading } from './index'


test('Render Content Component Loading', () => {
	const msg = 'Loading...'

	const component = render( <Loading />)

	expect(component.container).toHaveTextContent(msg)
})
