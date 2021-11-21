import React, { useState } from 'react'
import { Link } from 'wouter'

import './styles.css'

export const Post = ({ id, title, body, user, comments }) => {
	const [showComments, setShowComments] = useState(false)

	const handleClickShow = () => {
		setShowComments(!showComments)
	}

	return (
		<div className="card__body">
			<Link to={`/posts/details/${id}`} >
				<h4>{ title }</h4>
			</Link>
			<p>{ body }</p>
			<div className="card__user">
					<img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
					<div className="user__info">
						<Link to={`/users/details/${user.id}`} >
							<h5>{ user.name }</h5>
						</Link>
						<small>{ user.username }</small>
					</div>
			</div>
			<div className="card__btn">
				<span className="btn btn-teal" onClick={ handleClickShow }>{ showComments ? 'Hide comments' : 'Show comments' }</span>
				<Link to={`/posts/update/${id}`} >
					<span className="btn btn-pink">Modify</span>
				</Link>
			</div>
			{
				showComments
				? <ul className="comments__ul">
					{
						comments.data.map( (comment) => {
							return(
							<li className="comments__li" key={ comment.id }>
								<h3 className="comments__title">{ comment.name } ({ comment.email })</h3>
								<p  className="comments__comment">{ comment.body }</p>
							</li>
							)
						})
					}
					</ul>
				: null
			}
		</div>
	)
}