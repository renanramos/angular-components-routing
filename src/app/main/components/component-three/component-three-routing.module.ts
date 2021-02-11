import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentThreeComponent } from './component-three.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentThreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentThreeRoutingModule {}
