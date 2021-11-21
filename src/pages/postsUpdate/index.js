import React, { useState, useEffect } from 'react'
import { useRoute } from "wouter";

import './styles.css'

// Components
import { Error } from 'components/error'
import { Loading } from 'components/loading'

// Services
import { GetPostByIdHook, UpdatePostHook } from 'services/post/hooks'

export const PostsUpdate = () => {
	const [ match, params ] = useRoute("/posts/update/:id");
	const id =
		match
			? params.id
			: ''

	const { data, error, loading } = GetPostByIdHook(id)
	const [ title, setTitle ] = useState('')
	const [ body, setBody ] = useState('')

	const [ loadingg, setLoadingg ] = useState(false)
	const [ create, setCreate ] = useState(false)
	const [ err, setErr ] = useState(false)

	useEffect(() => {
			if(loading === false && data){
				setTitle(data.post.title);
				setBody(data.post.body);
			}
	}, [loading, data])

	const [ updatePost ] = UpdatePostHook()

	const	handleSubmit = (e) => {
		e.preventDefault()
		setLoadingg(true)

		const inputPostUpdate = {
			"title": title,
			"body": body
		}

		const result = updatePost({ variables: { id: id, input: inputPostUpdate } })

		result
		.then((res) => {
			setLoadingg(false)
			setCreate(true)
		})
		.catch((error) => {
			setLoadingg(false)
			setErr(true)
		})
	}

	if(error) return <Error error={ error }/>
	return(
		loading
		? <Loading />
		: <div className="container__update">
				<h3 className="update__title">Update Post</h3>
				<form className="update__form" onSubmit={ handleSubmit}>
					<input className="form__title" type="text" value={ title } onChange={ e => setTitle(e.target.value)}  placeholder="Title"/>
					<textarea className="form__body" rows="10" cols="50" value={ body } onChange={ e => setBody(e.target.value)} placeholder="Body"/>
					<button className="form__btn">Submit</button>
				</form>
				{
					loadingg
						? <Loading />
						: null
				}

				{
					create
						? <p>Post has been updated</p>
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