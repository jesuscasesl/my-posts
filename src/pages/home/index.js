import React from 'react'

import './styles.css'

export const Home = ( ) => {

	return(
		<div className="container__home">
			<h2 className="home__tile">It has been used to develop the project:</h2>
			<ul className="home__ul">
				<li className="home__element"><a href="https://es.reactjs.org/" target="_blank" rel="noreferrer">React</a></li>
				<li className="home__element"><a href="https://graphql.org/" target="_blank" rel="noreferrer">Graphql</a></li>
				<li className="home__element"><a href="https://www.apollographql.com/" target="_blank" rel="noreferrer">Apollo</a></li>
				<li className="home__element"><a href="https://graphqlzero.almansi.me/" target="_blank" rel="noreferrer">Graphqlzero</a></li>
			</ul>
		</div>
	)
}