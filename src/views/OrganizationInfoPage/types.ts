import { CounterSliceState } from "@/src/features/search/model/slices/counterSlice";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IOrganizationInfoPageeProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  params : {
    INN : number
  }
}