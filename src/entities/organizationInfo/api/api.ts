import { getOrganizationInfoApi } from "./configApi"
import { $OrganizationInfoResponse, OrganizationInfoResponse } from "./types"

export const getOrganizationInfo = async (query : number) : Promise<OrganizationInfoResponse> => {
  const body = JSON.stringify({query: query})
  const respose = (await getOrganizationInfoApi.post('/findById/party', body)).data
  return $OrganizationInfoResponse.parse(respose)
}