import { getOrganizationInfo } from '@/src/entities';
import { OrganizationInfoResponse } from "@/src/entities/organizationInfo/api/types";
import styles from './SSRenderOrganizationInfo.module.css';
import { SearchForm } from "../SearchForm";

export const SSRenderOrganizationInfo = async ( {INN} : {INN: number} ) : Promise<JSX.Element> => {

  let data : OrganizationInfoResponse;
  try {
    data = await getOrganizationInfo(INN)    
  } catch (err) {
    console.log(err);
    return <section>
      something went wrong
    </section>
  }
  return (
    <section className={styles.orgInfo}>
      <div className={styles.container}>
        <SearchForm />
        {!data.suggestions?.length 
        ?
          <div>nothing was found. May be your INN is incorrect</div>
        :
        <>
      <h2 className={styles.title}>all received data about organization</h2>
      <ul className={styles.mainList}>
      {data.suggestions.map((item, index)=> (
        <li>
          <ul key={index} className={styles.secondaryList}>
            <li className={styles.name}>название : {item.value}</li>
            <li>неофициальное название : {item.unrestricted_value}</li>
            <li>президент : {item.data?.management?.name}</li>
            <li>Должность : {item.data?.management?.post}</li>
            <li>КПП : {item.data?.kpp}</li>
            <li>Состояние : {item.data?.state?.status ? item.data.state.status : 'не известно'}</li>
            <li>ИНН : {item.data?.inn}</li>
            <li>ОГРН : {item.data?.ogrn}</li>
            <li>ОКОГУ : {item.data?.okogu}</li>
            <li>ОПФ : {item.data?.opf?.code ? item.data.opf.code : 'unknown'}</li>
            <li>адресс : {item.data?.address?.value ? item.data.address.value : 'unknown'}</li>
            <li>почтовый индекс : {item.data?.address?.data?.postal_code ? item.data.address.data.postal_code : 'unknown'}</li>
          </ul>
        </li>
        ))}
      </ul>
      </>}
    </div>
      
    </section>
)
}