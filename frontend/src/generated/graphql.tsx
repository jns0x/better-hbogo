import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  videos: Array<Video>;
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['Float'];
  external_id: Scalars['Float'];
  imageId: Scalars['String'];
  title: Scalars['String'];
  year?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  availableDate?: Maybe<Scalars['Int']>;
  engTitle: Scalars['String'];
  original_title?: Maybe<Scalars['String']>;
  imdb_rate?: Maybe<Scalars['String']>;
  age_rate?: Maybe<Scalars['String']>;
  synopsis?: Maybe<Scalars['String']>;
};

export type VideosQueryVariables = Exact<{ [key: string]: never; }>;


export type VideosQuery = (
  { __typename?: 'Query' }
  & { videos: Array<(
    { __typename?: 'Video' }
    & Pick<Video, 'id' | 'external_id' | 'imageId' | 'title' | 'year' | 'type' | 'engTitle' | 'original_title' | 'imdb_rate' | 'age_rate' | 'synopsis'>
  )> }
);


export const VideosDocument = gql`
    query Videos {
  videos {
    id
    external_id
    imageId
    title
    year
    type
    engTitle
    original_title
    imdb_rate
    age_rate
    synopsis
  }
}
    `;

/**
 * __useVideosQuery__
 *
 * To run a query within a React component, call `useVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideosQuery({
 *   variables: {
 *   },
 * });
 */
export function useVideosQuery(baseOptions?: Apollo.QueryHookOptions<VideosQuery, VideosQueryVariables>) {
        return Apollo.useQuery<VideosQuery, VideosQueryVariables>(VideosDocument, baseOptions);
      }
export function useVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideosQuery, VideosQueryVariables>) {
          return Apollo.useLazyQuery<VideosQuery, VideosQueryVariables>(VideosDocument, baseOptions);
        }
export type VideosQueryHookResult = ReturnType<typeof useVideosQuery>;
export type VideosLazyQueryHookResult = ReturnType<typeof useVideosLazyQuery>;
export type VideosQueryResult = Apollo.QueryResult<VideosQuery, VideosQueryVariables>;