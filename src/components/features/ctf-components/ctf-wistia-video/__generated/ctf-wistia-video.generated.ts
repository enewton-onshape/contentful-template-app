import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type WistiaVideoFieldsFragment = { __typename: 'WistiaVideo', videoId?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfWistiaVideoQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfWistiaVideoQuery = { __typename?: 'Query', wistiaVideo?: (
    { __typename?: 'WistiaVideo' }
    & WistiaVideoFieldsFragment
  ) | null };

export const WistiaVideoFieldsFragmentDoc = `
    fragment WistiaVideoFields on WistiaVideo {
  __typename
  sys {
    id
  }
  videoId
}
    `;
export const CtfWistiaVideoDocument = `
    query CtfWistiaVideo($id: String!, $locale: String, $preview: Boolean) {
  wistiaVideo(id: $id, locale: $locale, preview: $preview) {
    ...WistiaVideoFields
  }
}
    ${WistiaVideoFieldsFragmentDoc}`;
export const useCtfWistiaVideoQuery = <
      TData = CtfWistiaVideoQuery,
      TError = unknown
    >(
      variables: CtfWistiaVideoQueryVariables,
      options?: UseQueryOptions<CtfWistiaVideoQuery, TError, TData>
    ) =>
    useQuery<CtfWistiaVideoQuery, TError, TData>(
      ['CtfWistiaVideo', variables],
      customFetcher<CtfWistiaVideoQuery, CtfWistiaVideoQueryVariables>(CtfWistiaVideoDocument, variables),
      options
    );

useCtfWistiaVideoQuery.getKey = (variables: CtfWistiaVideoQueryVariables) => ['CtfWistiaVideo', variables];
;

useCtfWistiaVideoQuery.fetcher = (variables: CtfWistiaVideoQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfWistiaVideoQuery, CtfWistiaVideoQueryVariables>(CtfWistiaVideoDocument, variables, options);