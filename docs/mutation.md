# Mutation

Every GraphQL schema has a root type for both queries and mutations.The mutations are the way of updating data in databases.

Sending JWT token with every request is necessary as all mutations required user to be logged in.

## Authentication

**signup** ([MutationResponse!](output.md#mutation-response))
Signup for user.

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``name`` | ``String!`` | Name of new User|
| ``username`` | ``String!`` | Username of new User |
| ``email`` | ``String!`` | Email ID of new User |
| ``password`` | ``String!`` | Password of new User |

**verifyUser** ([MutationResponse!]outputn.md#mutation-response))
Verifing User a blog.

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``userId`` | ``ID!`` | User Id|
| ``otp`` | ``String!`` | OTP for Verification |


**forgotPassword** ([MutationResponse!]outputn.md#mutation-response))
Resets password of user.

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``newPassword`` | ``String!`` | New Password|
| ``newRePassword`` | ``String!`` | Re New Password |

**updatePassword** ([MutationResponse!]outputn.md#mutation-response))
Update Password.

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``oldPassword`` | ``String!`` | Provide Old password |
| ``newPassword`` | ``String!`` | new password |

**logout** ([MutationResponse!](output.md#mutation-response))
Logging out the user.

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``userId`` | ``ID!`` | User Id|

## Blog 

**createBlog** ([MutationResponse!]outputn.md#mutation-response))
Creating a blog.

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``title`` | ``String!`` | Specifies title for blog |
| ``content`` | ``String!`` | Provide content of the blog |
| ``tags`` | ``String!`` | Addes tags to blog |

**editBlog** ([MutationResponse!]outputn.md#mutation-response))
Editing a blog.

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``title`` | ``String!`` | Specifies title for blog |
| ``content`` | ``String!`` | Provide content of the blog |
| ``tags`` | ``String!`` | Addes tags to blog |

**deleteBlog** ([MutationResponse!]outputn.md#mutation-response))
Editing a blog.

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``_id`` | ``ID!`` | Id blog |

## User

**updateBio** ([MutationResponse!]outputn.md#mutation-response))
Updating Bio of user.

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``about`` | ``String!`` | New bio of user |