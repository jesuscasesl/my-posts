import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { Post } from './index'


test('Render Content Component Post', () => {
	const id = '2'
	const title = 'Qui est esse'
	const body = 'Est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptat'
	const user = {
		"id": "1",
		"name": "Leanne Graham",
		"username": "Bret",
		"email": "Sincere@april.biz",
		"phone": "1-770-736-8031 x56442"
	}
	const comments = {
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

	const component = render( <Post id={ id } title={ title } body={ body } user={ user } comments={ comments } />)

	expect(component.container).toHaveTextContent(title)
	expect(component.container).toHaveTextContent(body)
})

test('Click show comments', () => {
	const id = '2'
	const title = 'Qui est esse'
	const body = 'Est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptat'
	const user = {
		"id": "1",
		"name": "Leanne Graham",
		"username": "Bret",
		"email": "Sincere@april.biz",
		"phone": "1-770-736-8031 x56442"
	}
	const comments = {
		"data": [
			{
				"id": "1",
				"name": "et fugit eligendi deleniti quidem qui sint nihil autem",
				"email": "Presley.Mueller@myrl.com"
			},
			{
				"id": "2",
				"name": "repellat consequatur praesentium vel minus molestias voluptatum",
				"email": "Dallas@ole.me"
			},
			{
				"id": "3",
				"name": "et omnis dolorem",
				"email": "Mallory_Kunze@marie.org"
			},
			{
				"id": "4",
				"name": "provident id voluptas",
				"email": "Meghan_Littel@rene.us"
			},
			{
				"id": "5",
				"name": "eaque et deleniti atque tenetur ut quo ut",
				"email": "Carmen_Keeling@caroline.name"
			}
		]
	}

	const component = render( <Post id={ id } title={ title } body={ body } user={ user } comments={ comments }/>)

	const btn = component.getByText('Show comments')
	fireEvent.click(btn)

	expect(component.container).toHaveTextContent('Hide comments')
})