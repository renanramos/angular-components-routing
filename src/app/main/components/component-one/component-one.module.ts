import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOneComponent } from './component-one.component';
import { ComponentOneRoutingModule } from './component-one-routing.module';

@NgModule({
  declarations: [ComponentOneComponent],
  imports: [CommonModule, ComponentOneRoutingModule],
  exports: [ComponentOneComponent],
})
export class ComponentOneModule {}
