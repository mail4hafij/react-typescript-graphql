# react-typescript-graphql
The idea here is to setup a basic react application in typescript which communicates with GraphQL banckend.

There are two projects in the solution.

    Landlord.API - which has all the setup for GraphQL. This project is implemented in .netcore 2.0.
    Landlord.SRC - which has all the business logic.
    

The frontend project is called react. Open react app/folder with VS code. Any changes to GrpahQL api should be reflected on the react app. I used graphql code generator to generate typescript SDK from GraphQL schema.

## graphql code generator
You can read more about the code generator here.
https://github.com/dotansimha/graphql-code-generator
https://graphql-code-generator.com/docs/getting-started/installation
https://graphql-code-generator.com/docs/plugins/typescript-graphql-request

## To generate ready to use SDK
To generate the sdk code in the react app

`yarn generate`

## Starting react app

`yarn start`

