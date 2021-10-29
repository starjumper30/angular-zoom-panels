import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZoomPanelContainerDirective } from './zoom-panel-container.directive';
import { ZoomPanelDirective } from './zoom-panel.directive';

@NgModule({
  declarations: [ZoomPanelDirective, ZoomPanelContainerDirective],
  imports: [CommonModule],
  exports: [ZoomPanelDirective, ZoomPanelContainerDirective]
})
export class ZoomPanelModule {}
