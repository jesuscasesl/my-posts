import React from 'react'

// Components
import { User }  from 'components/user'

export const ListUsers = ({ users }) => {
	return (
    <ul className="container__listCard">
      {
        users.data.map(({ id, name, username, email, phone }) => {
          return (
            <li key={ id } className="card">
              <User
                key={ id }
                id={ id }
                name={ name }
                username={ username }
                email={ email }
                phone={ phone }
                />
            </li>
          )
        })
      }
    </ul>
  )
}
