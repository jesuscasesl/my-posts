import React, { useContext } from 'react'
import { useRoute } from "wouter";

import './styles.css'

// Components
import { Error } from 'components/error'
import { Loading } from 'components/loading'
import { Post } from 'components/post'

// Services
import { GetPostByIdHook } from 'services/post/hooks'

// Context
import PostsContext from 'context/postsContext'

export const PostsDetails = () => {
	const [ match, params ] = useRoute("/posts/details/:id");
	const id =
		match
			? params.id
			: ''

	const { posts } = useContext(PostsContext)
	if(posts.length !== 0){
		const postsSelect = posts.data.filter(post => post.id === id)
		const post = postsSelect[0]

		return(
			!post
				? <Loading />
				: <div className="container__listCard">
						<div className="card">
							<Post
								id={ post.id }
								title={ post.title }
								body={ post.body }
								user={ post.user }
								comments={ post.comments } />
						</div>
					</div>
		)
	} else {
		const { data, loading, error } = GetPostByIdHook(id)

		if(error) return <Error error={ error }/>
		return(
			loading
				? <Loading />
				: <div className="container__listCard">
						<div className="card">
							<Post
								id={ data.post.id }
								title={ data.post.title }
								body={ data.post.body }
								user={ data.post.user }
								comments={ data.post.comments } />
							</div>
					</div>
		)
	}
}