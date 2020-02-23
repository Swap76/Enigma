# Query
Every GraphQL schema has a root type for both queries and mutations. The query type defines GraphQL operations that retrieve data from the server.

For few Queries the JWT token is neccessary. Good practice will be to send JWT when ever user is logged in.

## Authentication

**login** ([jwtToken!](output.md#auth))
Login with email and password 

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``email`` | ``String!`` | Email Id of user |
| ``password`` | ``String!`` | Password of user |


**resendOtp** ([QueryResponse!](output.md#query-response))
Resend the OTP to mail of user

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``userId`` | ``String!`` | userId of user |

**forgotPasswordMail** ([QueryResponse!](output.md#query-response))
Send password reset link using mail

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``email`` | ``String!`` | Email Id of user |

## Blog

**blogs** ([[Blog!]](interfaces.md#blog))
Look up for all blogs   

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``limit`` | ``Int`` | Limit the number of blogs |
| ``skip`` | ``Int`` | Skip few blogs from the start |


**blogsEncrypted** ([[Blog!]](interfaces.md#blog))
Look up for all blogs but the data is encrypted  

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``limit`` | ``Int`` | Limit the number of blogs |
| ``skip`` | ``Int`` | Skip few blogs from the start |


**blogById** ([singleBlog!](interfaces.md#blog))
Look up for single blog the data is encrypted   

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``_id`` | ``ID!`` | ID of blog |

**blogByUser** ([Blog!](interfaces.md#blog))
Look up for blogs by a particular user 

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``userId`` | ``String!`` | Find using user Id |
| ``limit`` | ``Int`` | Limit the number of blogs |
| ``skip`` | ``Int`` | Skip few blogs from the start |

## User

**users** ([[User!]](interfaces.md#user))
Look up for users   

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``limit`` | ``Int`` | Limit the number of users |
| ``skip`` | ``Int`` | Skip few users from the start |
| ``where`` | ``UserWhereInput`` | Find by specific value of the fields |

**userById** ([User!](interfaces.md#user))
Look up for single user by Id  

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``_id`` | ``ID!`` | ID of user |