import { object, z } from "zod";

export type OrganizationInfoResponse = z.infer<typeof $OrganizationInfoResponse>
export type Suggestion = z.infer<typeof $Suggestion>;

export const $Metro = z.object({
  name: z.string().nullable(),
  line: z.string().nullable(),
  distance: z.number().nullable()
})

export const $Data2 = object({
  postal_code: z.string().nullable(),
  country: z.string().nullable(),
  country_iso_code: z.string().nullable(),
  federal_district: z.string().nullable(),
  region_fias_id: z.string().nullable(),
  region_kladr_id: z.string().nullable(),
  region_iso_code: z.string().nullable(),
  region_with_type: z.string().nullable(),
  region_type: z.string().nullable(),
  region_type_full: z.string().nullable(),
  region: z.string().nullable(),
  area_fias_id: z.any().nullable(),
  area_kladr_id: z.any().nullable(),
  area_with_type: z.any().nullable(),
  area_type: z.any().nullable(),
  area_type_full: z.any().nullable(),
  area: z.any().nullable(),
  city_fias_id: z.string().nullable(),
  city_kladr_id: z.string().nullable(),
  city_with_type: z.string().nullable(),
  city_type: z.string().nullable(),
  city_type_full: z.string().nullable(),
  city: z.string().nullable(),
  city_area: z.string().nullable(),
  city_district_fias_id: z.any().nullable(),
  city_district_kladr_id: z.any().nullable(),
  city_district_with_type: z.string().nullable(),
  city_district_type: z.string().nullable(),
  city_district_type_full: z.string().nullable(),
  city_district: z.string().nullable(),
  settlement_fias_id: z.any().nullable(),
  settlement_kladr_id: z.any().nullable(),
  settlement_with_type: z.any().nullable(),
  settlement_type: z.any().nullable(),
  settlement_type_full: z.any().nullable(),
  settlement: z.any().nullable(),
  street_fias_id: z.string().nullable(),
  street_kladr_id: z.string().nullable(),
  street_with_type: z.string().nullable(),
  street_type: z.string().nullable(),
  street_type_full: z.string().nullable(),
  street: z.string().nullable(),
  stead_fias_id: z.any().nullable(),
  stead_cadnum: z.any().nullable(),
  stead_type: z.any().nullable(),
  stead_type_full: z.any().nullable(),
  stead: z.any().nullable(),
  house_fias_id: z.string().nullable(),
  house_kladr_id: z.string().nullable(),
  house_cadnum: z.string().nullable(),
  house_flat_count: z.any().nullable(),
  house_type: z.string().nullable(),
  house_type_full: z.string().nullable(),
  house: z.string().nullable(),
  block_type: z.string().optional().nullable(),
  block_type_full: z.string().optional().nullable(),
  block: z.string().optional().nullable(),
  entrance: z.any().nullable(),
  floor: z.any().nullable(),
  flat_fias_id: z.any().nullable(),
  flat_cadnum: z.any().nullable(),
  flat_type: z.string().optional().nullable(),
  flat_type_full: z.string().optional().nullable(),
  flat: z.string().optional().nullable(),
  flat_area: z.string().nullable(),
  square_meter_price: z.string().nullable(),
  flat_price: z.any().nullable(),
  room_fias_id: z.any().nullable(),
  room_cadnum: z.any().nullable(),
  room_type: z.any().nullable(),
  room_type_full: z.any().nullable(),
  room: z.any().nullable(),
  postal_box: z.any().nullable(),
  fias_id: z.string().nullable(),
  fias_code: z.string().nullable(),
  fias_level: z.string().nullable(),
  fias_actuality_state: z.string().nullable(),
  kladr_id: z.string().nullable(),
  geoname_id: z.string().nullable(),
  capital_marker: z.string().nullable(),
  okato: z.string().nullable(),
  oktmo: z.string().nullable(),
  tax_office: z.string().nullable(),
  tax_office_legal: z.string().nullable(),
  timezone: z.string().nullable(),
  geo_lat: z.string().nullable(),
  geo_lon: z.string().nullable(),
  beltway_hit: z.string().optional().nullable(),
  beltway_distance: z.any().nullable(),
  metro: z.array($Metro).nullable(),
  divisions: z.any().nullable(),
  qc_geo: z.string().nullable(),
  qc_complete: z.any().nullable(),
  qc_house: z.any().nullable(),
  history_values: z.any().nullable(),
  unparsed_parts: z.any().nullable(),
  source: z.string().nullable(),
  qc: z.string().nullable(),
});

export const $Address = z.object({
  value: z.string().nullable(),
  unrestricted_value: z.string().nullable(),
  invalidity: z.any().nullable(),
  data: $Data2.nullable()
})

export const $Name = z.object({
  full_with_opf: z.string().nullable(),
  short_with_opf: z.string().nullable(),
  latin: z.any().nullable(),
  full: z.string().nullable(),
  short: z.string().nullable()
})

export const $Opf = z.object({
  type: z.string().nullable(),
  code: z.string().nullable(),
  full: z.string().nullable(),
  short: z.string().nullable()
})

export const $State = z.object({
  status: z.string(),
  code: z.any(),
  actuality_date: z.number(),
  registration_date: z.number(),
  liquidation_date: z.any()
})

export const $Management = z.object({
  name: z.string().nullable(),
  post: z.string().nullable(),
  disqualified: z.any().nullable()
})

export const $Data = z.object({
  kpp: z.string().nullable(),
  capital: z.any().nullable(),
  invalid: z.any().nullable(),
  management: $Management.nullable(),
  founders: z.any().nullable(),
  managers: z.any().nullable(),
  predecessors: z.any().nullable(),
  successors: z.any().nullable(),
  branch_type: z.string().nullable(),
  branch_count: z.number().nullable(),
  source: z.any().nullable(),
  qc: z.any().nullable(),
  hid: z.string().nullable(),
  type: z.string().nullable(),
  state: $State.nullable(),
  opf: $Opf.nullable(),
  name: $Name.nullable(),
  inn: z.string().nullable(),
  ogrn: z.string().nullable(),
  okpo: z.string().nullable().optional(),
  okato: z.string().nullable().optional(),
  oktmo: z.string().nullable().optional(),
  okogu: z.string().nullable().optional(),
  okfs: z.string().nullable().optional(),
  okved: z.string().nullable().optional(),
  okveds: z.any().nullable(),
  authorities: z.any().nullable(),
  documents: z.any().nullable(),
  licenses: z.any().nullable(),
  finance: z.any().nullable(),
  address: $Address.nullable(),
  phones: z.any().nullable(),
  emails: z.any().nullable(),
  ogrn_date: z.number().nullable().optional(),
  okved_type: z.string().nullable().optional(),
  employee_count: z.any().nullable()
}).nullable()

export const $Suggestion = z.object({
  value : z.string(),
  unrestricted_value : z.string().nullable(),
  data : $Data.nullable()
})

export const $OrganizationInfoResponse = z.object({
  suggestions : z.array($Suggestion).nullable()
})
