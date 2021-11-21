import { useQuery, useMutation } from "@apollo/client";

// Queries
import { getUsersQuery, getUserByIdQuery }  from 'services/user/queries'
import { createUserMutation, updateUserMutation }  from 'services/user/mutations'

export const GetUserHook = () => {
	const result = useQuery(getUsersQuery)
	return result
}

export const GetUserByIdHook = (userId) => {
	const result = useQuery(getUserByIdQuery, { variables: { userId: userId } })
	return result
}

export const CreateUserHook = () => {
	const result = useMutation(createUserMutation, {
		refetchQueries: [ { query: getUsersQuery } ]
	})
	return result
}

export const UpdateUserHook = () => {
	const result = useMutation(updateUserMutation)
	return result
}