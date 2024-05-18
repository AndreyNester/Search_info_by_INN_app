'use client'

import { useAppSelector } from "@/src/shared/model/config/redux/hooks"

export const CSRenderOrganizationInfo = () : JSX.Element => {
  const data = useAppSelector((state)=>state.counter.data)

  return <section>
  page witj data from redux : 
  <ul>
    {data.map((item, index)=> <li key={index}>{item.value}</li> )}
  </ul>
</section>
}