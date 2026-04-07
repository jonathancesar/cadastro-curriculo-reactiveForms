import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IStatesReponse, StatesListResponse } from '../../shared/models/states-response';
import { map, Observable } from 'rxjs';
import { CitiesListResponse, ICitiesResponse } from '../../shared/models/cities-response';

@Injectable({
  providedIn: 'root',
})
export class StatesAndCitiesApi {
  private readonly _httpClient = inject(HttpClient);

  getStates(): Observable<StatesListResponse> {
    return this._httpClient
      .post<IStatesReponse>('https://countriesnow.space/api/v0.1/countries/states', {
        country: 'Brazil',
      })
      .pipe(map((statesResponse) => statesResponse.data.states));
  }

  getCities(state: string): Observable<CitiesListResponse> {
    return this._httpClient
      .post<ICitiesResponse>('https://countriesnow.space/api/v0.1/countries/state/cities', {
        country: 'Brazil',
        state,
      })
      .pipe(map((citiesResponse) => citiesResponse.data));
  }
}
