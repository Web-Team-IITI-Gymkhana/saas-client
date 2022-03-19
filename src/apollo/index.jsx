import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

const cache = new InMemoryCache();

/****  Do Not Remove the following basic client initialization ***/

// const client = new ApolloClient({
//   uri: 'https://saas-server-production.up.railway.app/graphql',
//   cache: new InMemoryCache()
// });

/*** Basic Apollo Client cache persistance */

// await before instantiating ApolloClient, else queries might run before the cache is persisted
await persistCache({
  cache,
  storage: new LocalStorageWrapper(window.localStorage)
});

// Continue setting up Apollo as usual.
const client = new ApolloClient({
  uri: 'https://saas-server-production.up.railway.app/graphql',
  cache: cache
});

/** Advanced Apollo Client Query Persistance */

export default client;
