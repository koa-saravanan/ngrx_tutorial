import { Routes } from '@angular/router';
import { CounterComponent } from './Components/counter/counter.component';
import { CrudComponent } from './Components/crud/crud.component';
import { EffectsComponent } from './Components/effects/effects.component';

export const routes: Routes = [
    {path:'' , component:CrudComponent},
    {path:'counter' , component:CounterComponent},
    {path:'effects' , component:EffectsComponent},
    {path:'crud' , component:CrudComponent},
];
