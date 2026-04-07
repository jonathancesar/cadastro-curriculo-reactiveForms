export type CitiesListResponse = string[];

export interface ICitiesResponse {
  error: boolean;
  msg: string;
  data: CitiesListResponse;
}
