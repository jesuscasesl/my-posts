import React, { useEffect, useContext } from 'react'
import { Link } from 'wouter'

import './styles.css'

// Components
import { Error } from 'components/error'
import { Loading } from 'components/loading'
import { ListPosts } from 'components/listPosts'

// Services
import { GetPostHook } from 'services/post/hooks'

// Context
import PostsContext from 'context/postsContext'

export const Post = () => {
	const { data, loading, error } = GetPostHook()
	const { posts, setPosts, postsAux, setPostsAux } = useContext(PostsContext)

	useEffect(() => {
		if(loading === false && data){
			setPosts(data.posts);
			setPostsAux(data.posts);
		}
	}, [loading, data, setPosts, setPostsAux])

	const handleFilter = (e) => {
		const filter = e.currentTarget.value
		const postsFilter = {
			data: postsAux.data.filter( post => post.user.name.toLowerCase().includes(filter.toLowerCase()) )
		}
		setPosts(postsFilter)
	}

	if(error) return <Error error={ error }/>
	return(
		posts.length === 0
			? <Loading />
			: <div>
					<form className="form__filter">
						<label htmlFor="Name">Filter by name: </label>
						<input type="text" placeholder="name" id="Name" name="Name" onChange={ handleFilter }/>
					</form>

					<div className="container__new">
						<Link to={`/posts/create`} >
							<span className="new__btn">New Post</span>
						</Link>
					</div>

					<ListPosts posts={ posts }/>
				</div>
	)
}