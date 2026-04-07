export interface IStateResponse {
  name: string;
  state_code: string;
}

export type StatesListResponse = IStateResponse[];

export interface IStatesReponse {
  error: boolean;
  msg: string;
  data: {
    name: string;
    iso3: string;
    iso2: string;
    states: StatesListResponse;
  };
}
