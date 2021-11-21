import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { User } from './index'


test('Render Content Component User', () => {
	const id = '2'
	const name = 'Pedro Salinas'
	const username = 'jack'
	const email = 'test@test.com'
	const phone = '666112233'

	const component = render( <User id={ id } name={ name } username={ username } email={ email } phone={ phone } />)

	expect(component.container).toHaveTextContent(name)
	expect(component.container).toHaveTextContent(phone)
})
