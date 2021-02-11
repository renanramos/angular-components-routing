import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentThreeComponent } from './component-three.component';
import { ComponentThreeRoutingModule } from './component-three-routing.module';

@NgModule({
  declarations: [ComponentThreeComponent],
  imports: [CommonModule, ComponentThreeRoutingModule],
  exports: [ComponentThreeComponent],
})
export class ComponentThreeModule {}
