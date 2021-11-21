import React from 'react'
import { Link } from 'wouter'

import './styles.css'

export const User = ({ id, name, username, email, phone }) => {
	return (
		<div className="card__body">
			<Link to={`/users/details/${id}`} >
				<h4>{ name }</h4>
			</Link>
			<p>{ username }</p>
			<div className="card__user">
					<img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
					<div className="user__info">
						<h5>{ email }</h5>
						<small>{ phone }</small>
					</div>
			</div>
		</div>
	)
}