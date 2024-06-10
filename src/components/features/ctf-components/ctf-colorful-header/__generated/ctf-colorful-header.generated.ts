import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ColorfulHeaderFieldsFragment = { __typename: 'ComponentColorfulHeader', text?: string | null, color?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfColorfulHeaderQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfColorfulHeaderQuery = { __typename?: 'Query', componentColorfulHeader?: (
    { __typename?: 'ComponentColorfulHeader' }
    & ColorfulHeaderFieldsFragment
  ) | null };

export const ColorfulHeaderFieldsFragmentDoc = `
    fragment ColorfulHeaderFields on ComponentColorfulHeader {
  __typename
  sys {
    id
  }
  text
  color
}
    `;
export const CtfColorfulHeaderDocument = `
    query CtfColorfulHeader($id: String!, $locale: String, $preview: Boolean) {
  componentColorfulHeader(id: $id, locale: $locale, preview: $preview) {
    ...ColorfulHeaderFields
  }
}
    ${ColorfulHeaderFieldsFragmentDoc}`;
export const useCtfColorfulHeaderQuery = <
      TData = CtfColorfulHeaderQuery,
      TError = unknown
    >(
      variables: CtfColorfulHeaderQueryVariables,
      options?: UseQueryOptions<CtfColorfulHeaderQuery, TError, TData>
    ) =>
    useQuery<CtfColorfulHeaderQuery, TError, TData>(
      ['CtfColorfulHeader', variables],
      customFetcher<CtfColorfulHeaderQuery, CtfColorfulHeaderQueryVariables>(CtfColorfulHeaderDocument, variables),
      options
    );

useCtfColorfulHeaderQuery.getKey = (variables: CtfColorfulHeaderQueryVariables) => ['CtfColorfulHeader', variables];
;

useCtfColorfulHeaderQuery.fetcher = (variables: CtfColorfulHeaderQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfColorfulHeaderQuery, CtfColorfulHeaderQueryVariables>(CtfColorfulHeaderDocument, variables, options);