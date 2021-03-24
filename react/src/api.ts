import { GraphQLClient } from "graphql-request";
import { getSdk, Sdk, SdkFunctionWrapper } from "./generated/sdk.generated";

// graphql endpoint.
const endpoint = "http://localhost:65216/graphql";

// https://graphql-code-generator.com/docs/plugins/typescript-graphql-request
const errorHandler: SdkFunctionWrapper = async <T>(
  action: () => Promise<T>
): Promise<T> => {
  const result = await action();
  return result;
};

// client
export const gqlClient: Sdk = (() => {
  const client = new GraphQLClient(endpoint, {
    credentials: "include",
    mode: "cors",
  });
  const sdk = getSdk(client, errorHandler);
  return sdk;
})();
