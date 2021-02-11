import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'one',
        loadChildren: () =>
          import('./components/component-one/component-one.module').then(
            (m) => m.ComponentOneModule
          ),
      },
      {
        path: 'two',
        loadChildren: () =>
          import('./components/component-two/component-two.module').then(
            (m) => m.ComponentTwoModule
          ),
      },
      {
        path: 'three',
        loadChildren: () =>
          import('./components/component-three/component-three.module').then(
            (m) => m.ComponentThreeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
