import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { empReducer } from './State/Emp/emp.reducer';
import { counterReducer } from './State/Counter/counter.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { todoReducer } from './State/CRUD/crud.reducers';
import { TodoEffects } from './State/CRUD/crud.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideStore({ employees: empReducer, counter: counterReducer, todos: todoReducer }),
    provideEffects([TodoEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
  ]
};
