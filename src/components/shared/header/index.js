import React from 'react'

import './styles.css'

// Components
import { ActiveLink } from 'components/shared/activeLink'

export const Header = () => {
	return (
		<header>
			<h2 className="header__title">Posts and Users</h2>

			<nav>
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/posts">Posts</ActiveLink>
        <ActiveLink href="/users">Users</ActiveLink>
      </nav>
		</header>
	)
}