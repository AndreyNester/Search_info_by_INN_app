import { IOrganizationInfoPageeProps } from "./types"
import { SSRenderOrganizationInfo } from "../../features/search/ui/SSRenderOrganizationInfo/SSRenderOrganizationInfo";
import { headers } from "next/headers";
import { getQueryParams } from "./helpers/utils/getQueryParams";
import { CSRenderOrganizationInfo } from "../../features/search/ui/CSRenderOrganizationInfo/CSRenderOrganizationInfo";

const OrganizationInfoPage = async (props : IOrganizationInfoPageeProps) : Promise<JSX.Element> => {
  const { params : { INN } } = props;
  const referer = headers().get('values');
  let queryParams : {CSR? : string} = {};
  if (referer) {
    queryParams = getQueryParams(referer) as {CSR : string};
    if (queryParams.CSR === 'true') {
      return /*<CSRenderOrganizationInfo/>*/<SSRenderOrganizationInfo INN={INN}/>
    }
  }
  return <SSRenderOrganizationInfo INN={INN}/>
}
export default OrganizationInfoPage;