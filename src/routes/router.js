import React  from 'react'
import { Route } from 'wouter'

// Pages
import { Home } from 'pages/home'

import { Post } from 'pages/posts'
import { PostsUpdate } from 'pages/postsUpdate'
import { PostsCreate } from 'pages/postsCreate'
import { PostsDetails } from 'pages/postsDetails'

import { User } from 'pages/users'
import { UsersDetails } from 'pages/usersDetails'

// Context
import { PostsContextProvider } from 'context/postsContext'

function Routes() {
  return (
		<PostsContextProvider>
			<Route
				path="/"
				component={ Home }/>

			<Route
				path="/posts"
				component={ Post }/>

			<Route
				path="/posts/details/:id"
				component={ PostsDetails }/>

			<Route
				path="/posts/update/:id"
				component={ PostsUpdate }/>

			<Route
				path="/posts/create"
				component={ PostsCreate }/>

			<Route
				path="/users"
				component={ User }/>

			<Route
				path="/users/details/:id"
				component={ UsersDetails }/>
		</PostsContextProvider>
  );
}

export default Routes;
