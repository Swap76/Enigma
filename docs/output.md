# Special Outputs

## Auth

**jwtToken** ([jwtToken!](query.md#authentication))
After Successful login this response is sent 

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``userId`` | ``ID`` | The unique Id of the user in ciphertext |
| ``token`` | ``String`` | The username of the user in ciphertext |
| ``code`` | ``String`` | Status code in ciphertext |
| ``message`` | ``String`` | The name of the user in ciphertext |

## Query Response

**QueryResponse** ([QueryResponse!](query.md)) This response is for some queries

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``code`` | ``Int!`` | Status Code |
| ``success`` | ``Boolean!`` | Tells Success of queries |
| ``message`` | ``String!`` | Provide message after queries |

## Mutation Response

**MutationResponse** ([MutationResponse](query.md)) This response is uniform for all mutations

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``code`` | ``Int!`` | Status Code|
| ``success`` | ``Boolean!`` | Tells Success of mutation |
| ``message`` | ``String!`` | Provide message after mutation |