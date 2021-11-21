import { gql } from "@apollo/client";

export const createPostMutation = gql`
mutation createPost (
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    id
    title
    body
  }
}`

export const updatePostMutation = gql`
mutation updatePost(
  $id: ID!,
  $input: UpdatePostInput!
) {
  updatePost(id: $id, input: $input) {
    id
    body
  }
}`