import React, { useEffect, useContext } from 'react'

// Components
import { Error } from 'components/error'
import { Loading } from 'components/loading'
import { ListUsers } from 'components/listUsers'

// Services
import { GetUserHook } from 'services/user/hooks'

// Context
import PostsContext from 'context/postsContext'

export const User = () => {
	const { data, loading, error } = GetUserHook()
	// const [ posts, setPosts ] = useState()
	const { users, setUsers } = useContext(PostsContext)

	useEffect(() => {
		if(loading === false && data){
			setUsers(data.users);
		}
	}, [loading, data, setUsers])

	if(error) return <Error error={ error }/>
	return(
		users.length === 0
			? <Loading />
			: <ListUsers users={ users }/>
	)
}