import React, { useState } from 'react'

import './styles.css'

// Components
import { Loading } from 'components/loading'

// Services
import { CreatePostHook } from 'services/post/hooks'

export const PostsCreate = () => {
	const [ title, setTitle ] = useState('')
	const [ body, setBody ] = useState('')
	const [ loading, setLoading ] = useState(false)
	const [ create, setCreate ] = useState(false)
	const [ err, setErr ] = useState(false)

	const [ createPost ] = CreatePostHook()

	const	handleSubmit = (e) => {
		setLoading(true)
		e.preventDefault()

		const inputPostUpdate = {
			"title": title,
			"body": body
		}

		const result = createPost({ variables: { input: inputPostUpdate } })

		result
		.then((res) => {
			setLoading(false)
			setCreate(true)
		})
		.catch((error) => {
			setLoading(false)
			setErr(true)
		})
	}

	return(
		<div className="container__update">
			<h3 className="update__title">New Post</h3>
			<form  className="update__form" onSubmit={ handleSubmit}>
				<input className="form__title"  type="text" value={ title } onChange={ e => setTitle(e.target.value)} placeholder="Title"/>
				<textarea className="form__body"  rows="10" cols="50" value={ body } onChange={ e => setBody(e.target.value)} placeholder="Body"/>
				<button className="form__btn">Submit</button>
			</form>
			{
				loading
					? <Loading />
					: null
			}

			{
				create
					? <p>Post has been created</p>
					: null
			}

			{
				err
					? <p>An error has occurred</p>
					: null
			}
		</div>
	)
}