import React, { useState } from 'react'

const Context = React.createContext({})

export const PostsContextProvider = ({ children }) => {
	const [posts, setPosts] = useState([])
	const [postsAux, setPostsAux] = useState([])
	const [users, setUsers] = useState([])

	return (
		<Context.Provider value={{ posts, setPosts, postsAux, setPostsAux, users, setUsers}}>
			{ children }
		</Context.Provider>
	)
}

export default Context