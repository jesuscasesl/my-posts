import { gql } from "@apollo/client";

export const getUsersQuery = gql`
query getUsers {
	users {
		data {
			id
			name
			username
			email
			phone
		}
	}
}`;

export const getUserByIdQuery = gql`
query getUserById($userId: ID!){
	user(id: $userId) {
		id
		name
		username
		email
		phone
	}
}`