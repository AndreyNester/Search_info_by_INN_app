import OrganizationInfoPage from "@/src/views/OrganizationInfoPage/OrganizationInfoPage"

const organizationInfo = ( {params} : {params : {INN : number}}) : JSX.Element => {
  return (
    <>
      <OrganizationInfoPage params={params} />
    </>
  )
}

export default organizationInfo;
