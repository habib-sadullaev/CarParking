import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { deserializeArray } from 'santee-dcts';
import { AppSettings } from '../app-settings';
import { TransitionDto } from './dtos/transition-dto';
import { Transition } from './models/transition';

@Injectable()
export class TransitionsApi {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly settings: AppSettings,
    ) { }

    public getTransitions(): Observable<Transition[]> {
        return this.httpClient.get<object[]>(`${this.settings.apiUrl}/transitions`).pipe(
            map(obj => deserializeArray(obj, TransitionDto)),
        );
    }
}
