import { gql } from "@apollo/client";

export const createUserMutation = gql`
mutation createUser (
  $input: CreateUserInput!
) {
  createUser(input: $input) {
    id
    name
    email
		phone
  }
}`

export const updateUserMutation = gql`
mutation updateUser(
  $id: ID!,
  $input: UpdateUserInput!
) {
  updateUser(id: $id, input: $input) {
    id
		name
    phone
		emnail
  }
}`