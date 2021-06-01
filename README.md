# react-typescript-graphql
The idea here is to setup a basic react application in typescript which communicates with GraphQL backend API.

There are two projects in the solution.

    Landlord.API - which has all the setup for GraphQL. This project is implemented in .netcore 2.0.
    Landlord.SRC - which has all the business logic.
    
The frontend project is called ```react```. Open the ```react``` app/folder with VS code. I plan to generate a typescript SDK inside my ```react``` application from the GraphQL schema. This will allow the ```react``` application to easily use the SDK to fetch and save data. I used graphql code generator to do exactly that. Run `yarn generate` to generate the SDK.

Note that, any changes to GraphQL api therefor must be reflected on the ```react``` application. So run `yarn generate` whenever there is a change in the GraphQL api.

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

