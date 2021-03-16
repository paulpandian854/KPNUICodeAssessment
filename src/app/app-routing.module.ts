import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from '../app/components/login-component/login-component.component';
import { TrainDetailsComponent} from './components/train-details/train-details.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'train-details',
    component: TrainDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
