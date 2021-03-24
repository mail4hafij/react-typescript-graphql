import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Date` scalar type represents a year, month and day in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  Date: any;
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: any;
  /** The `DateTimeOffset` scalar type represents a date, time and offset from UTC. `DateTimeOffset` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTimeOffset: any;
  /** The `Seconds` scalar type represents a period of time represented as the total number of seconds. */
  Seconds: any;
  /** The `Milliseconds` scalar type represents a period of time represented as the total number of milliseconds. */
  Milliseconds: any;
  Decimal: any;
};







export type PropertyQuery = {
  __typename?: 'PropertyQuery';
  properties?: Maybe<Array<Maybe<PropertyType>>>;
  property?: Maybe<PropertyType>;
};


export type PropertyQueryPropertyArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type PropertyType = {
  __typename?: 'PropertyType';
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['Int'];
  objectNumber: Scalars['String'];
  payments?: Maybe<Array<Maybe<PaymentType>>>;
  postalCode: Scalars['String'];
  street: Scalars['String'];
};

export type PaymentType = {
  __typename?: 'PaymentType';
  dateCreated: Scalars['Date'];
  dateOverdue: Scalars['Date'];
  id: Scalars['Int'];
  paid: Scalars['Boolean'];
  value: Scalars['Decimal'];
};

export type AddPropertyMutation = {
  __typename?: 'AddPropertyMutation';
  addProperty?: Maybe<PropertyType>;
};


export type AddPropertyMutationAddPropertyArgs = {
  property: PropertyInput;
};

export type PropertyInput = {
  name: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  family?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type GetPropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPropertiesQuery = (
  { __typename?: 'PropertyQuery' }
  & { properties?: Maybe<Array<Maybe<(
    { __typename?: 'PropertyType' }
    & Pick<PropertyType, 'objectNumber' | 'street' | 'city' | 'postalCode' | 'country'>
    & { payments?: Maybe<Array<Maybe<(
      { __typename?: 'PaymentType' }
      & Pick<PaymentType, 'id' | 'paid' | 'value' | 'dateCreated' | 'dateOverdue'>
    )>>> }
  )>>> }
);


export const GetPropertiesDocument = gql`
    query getProperties {
  properties {
    objectNumber
    street
    city
    postalCode
    country
    payments {
      id
      paid
      value
      dateCreated
      dateOverdue
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getProperties(variables?: GetPropertiesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPropertiesQuery> {
      return withWrapper(() => client.request<GetPropertiesQuery>(print(GetPropertiesDocument), variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;