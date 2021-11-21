import { useQuery, useMutation } from "@apollo/client";

// Queries
import { getPostsQuery, getPostByIdQuery }  from 'services/post/queries'
import { createPostMutation, updatePostMutation }  from 'services/post/mutations'

export const GetPostHook = () => {
	const result = useQuery(getPostsQuery)
	return result
}

export const GetPostByIdHook = (postId) => {
	const result = useQuery(getPostByIdQuery, { variables: { postId: postId } })
	return result
}

export const CreatePostHook = () => {
	const result = useMutation(
		createPostMutation,
		{ refetchQueries: [ { query: getPostsQuery } ] }
	)
	return result
}

export const UpdatePostHook = (id, inputPostUpdate) => {
	const result = useMutation(
		updatePostMutation,
		{ variables: { id: id, input: inputPostUpdate } }
	)
	return result
}