import React from 'react'

// Components
import { Post }  from 'components/post'

export const ListPosts = ({ posts }) => {
	return (
    <ul className="container__listCard">
      {
        posts.data.map(({ id, title, body, user, comments }) => {
          return (
            <li key={ id } className="card">
              <Post
                id={ id }
                title={ title }
                body={ body }
                user={ user }
                comments={ comments } />
            </li >
          )
        })
      }
    </ul>
  )
}
