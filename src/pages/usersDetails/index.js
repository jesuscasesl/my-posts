import React, { useContext } from 'react'
import { useRoute } from "wouter";

import './styles.css'

// Components
import { Error } from 'components/error'
import { Loading } from 'components/loading'
import { User } from 'components/user'

// Services
import { GetUserByIdHook } from 'services/user/hooks'

// Context
import PostsContext from 'context/postsContext'

export const UsersDetails = () => {
	const [ match, params ] = useRoute("/users/details/:id");
	const id =
		match
			? params.id
			: ''

	const { users } = useContext(PostsContext)
	if(users.length !== 0){
		const postsSelect = users.data.filter(user => user.id === id)
		const user = postsSelect[0]

		return(
			!user
				? <Loading />
				: <div className="container__listCard">
						<div className="card">
							<User
								id={ user.id }
								name={ user.name }
								username={ user.username }
								email={ user.email }
								phone={ user.phone } />
						</div>
					</div>
		)
	} else {
		const { data, loading, error } = GetUserByIdHook(id)

		if(error) return <Error error={ error }/>
		return(
			loading
				? <Loading />
				: <div className="container__listCard">
						<div className="card">
							<User
								id={ data.user.id }
								name={ data.user.name }
								username={ data.user.username }
								email={ data.user.email }
								phone={ data.user.phone } />
						</div>
					</div>
		)
	}
}