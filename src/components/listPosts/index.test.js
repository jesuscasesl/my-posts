import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { ListPosts } from './index'


test('Render Content Component ListPosts', () => {
	const postsMosk = {
		data: [
			{
				id: '2',
				title: 'Qui est esse',
				body: 'Est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptat',
				user: {
					"id": "1",
					"name": "Leanne Graham",
					"username": "Bret",
					"email": "Sincere@april.biz",
					"phone": "1-770-736-8031 x56442"
				},
				comments: {
					"data": [
						{
							"name": "et fugit eligendi deleniti quidem qui sint nihil autem",
							"email": "Presley.Mueller@myrl.com"
						},
						{
							"name": "repellat consequatur praesentium vel minus molestias voluptatum",
							"email": "Dallas@ole.me"
						},
						{
							"name": "et omnis dolorem",
							"email": "Mallory_Kunze@marie.org"
						},
						{
							"name": "provident id voluptas",
							"email": "Meghan_Littel@rene.us"
						},
						{
							"name": "eaque et deleniti atque tenetur ut quo ut",
							"email": "Carmen_Keeling@caroline.name"
						}
					]
				}
			}
		]
	}

	const component = render( <ListPosts posts={ postsMosk } />)

	expect(component.container).toHaveTextContent(postsMosk.data[0].title)
	expect(component.container).toHaveTextContent(postsMosk.data[0].body)
})
