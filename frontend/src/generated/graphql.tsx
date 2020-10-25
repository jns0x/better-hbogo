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
  videos: PaginatedVideos;
  video?: Maybe<Video>;
  series: Array<Video>;
};


export type QueryVideosArgs = {
  type?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
  imdb_rate?: Maybe<Scalars['String']>;
  age_rate?: Maybe<Scalars['String']>;
  availableDate?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrderBy>;
  order?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['String']>;
};


export type QueryVideoArgs = {
  id: Scalars['Int'];
};

export type PaginatedVideos = {
  __typename?: 'PaginatedVideos';
  videos: Array<Video>;
  hasMore: Scalars['Boolean'];
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
  image?: Maybe<Image>;
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['String'];
  img_190: Scalars['String'];
  img_262: Scalars['String'];
  img_561: Scalars['String'];
  img_800: Scalars['String'];
  img_1080: Scalars['String'];
  img_1280: Scalars['String'];
  title_image: Scalars['String'];
};

/** The basic directions */
export enum OrderBy {
  Year = 'year',
  AgeRate = 'age_rate',
  ImdbRate = 'imdb_rate',
  AvailableDate = 'availableDate'
}

export type VideosQueryVariables = Exact<{
  type?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
  imdb_rate?: Maybe<Scalars['String']>;
  age_rate?: Maybe<Scalars['String']>;
  availableDate?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrderBy>;
  order?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type VideosQuery = (
  { __typename?: 'Query' }
  & { videos: (
    { __typename?: 'PaginatedVideos' }
    & { videos: Array<(
      { __typename?: 'Video' }
      & Pick<Video, 'id' | 'external_id' | 'imageId' | 'title' | 'year' | 'type' | 'engTitle' | 'original_title' | 'imdb_rate' | 'age_rate' | 'synopsis'>
      & { image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'img_190' | 'img_262' | 'img_561' | 'img_800' | 'img_1080' | 'img_1280'>
      )> }
    )> }
  ) }
);


export const VideosDocument = gql`
    query Videos($type: String, $year: String, $imdb_rate: String, $age_rate: String, $availableDate: Int, $orderBy: orderBy, $order: String, $limit: Int) {
  videos(type: $type, year: $year, imdb_rate: $imdb_rate, age_rate: $age_rate, availableDate: $availableDate, orderBy: $orderBy, order: $order, limit: $limit) {
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
      image {
        img_190
        img_262
        img_561
        img_800
        img_1080
        img_1280
      }
    }
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
 *      type: // value for 'type'
 *      year: // value for 'year'
 *      imdb_rate: // value for 'imdb_rate'
 *      age_rate: // value for 'age_rate'
 *      availableDate: // value for 'availableDate'
 *      orderBy: // value for 'orderBy'
 *      order: // value for 'order'
 *      limit: // value for 'limit'
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