import {GraphQLClient} from 'graphql-request'
import {getSdk} from './sdk' // THIS FILE IS THE GENERATED FILE
import core from '@actions/core'
class GithubAPIClient {
  private static instance: GithubAPIClient
  sdk: ReturnType<typeof getSdk>
  private constructor() {
    const client = new GraphQLClient('https://api.github.com/graphql')
    client.setHeader('authorization', core.getInput('github-token'))
    this.sdk = getSdk(client)
  }

  static getInstance(): ReturnType<typeof getSdk> {
    if (!GithubAPIClient.instance) {
      GithubAPIClient.instance = new GithubAPIClient()
    }
    return GithubAPIClient.instance.sdk
  }
}
export default GithubAPIClient.getInstance()