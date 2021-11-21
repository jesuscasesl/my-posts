import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { ListUsers } from './index'


test('Render Content Component ListUsers', () => {
	const usersMosk = {
		data: [
			{
				id: '2',
				name: 'Pedro Salinas',
				username: 'Jack',
				email: 'test@test.com',
				phone: '66112233'
			}
		]
	}

	const component = render( <ListUsers users={ usersMosk } />)

	expect(component.container).toHaveTextContent(usersMosk.data[0].name)
	expect(component.container).toHaveTextContent(usersMosk.data[0].email)
})
