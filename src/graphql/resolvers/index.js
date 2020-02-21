import authQuery from './queries/auth';
import blogQuery from './queries/blog';
import userQuery from './queries/user';
import mainQuery from './queries/main';
import authMutations from './mutations/auth';
import blogMutations from './mutations/blog';
import userMutations from './mutations/user';

export default {
	Query: {
		...authQuery,
		...blogQuery,
		...userQuery,
		...mainQuery,
	},

	Mutation: {
		...authMutations,
		...blogMutations,
		...userMutations,
	},
  
	MutationResponse: {
		__resolveType(mutationResponse, context, info){
			return null;
		},
	},
  
};