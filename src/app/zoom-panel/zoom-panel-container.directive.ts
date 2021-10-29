import {
  AfterViewChecked,
  ContentChildren,
  Directive,
  QueryList
} from '@angular/core';
import { ZoomPanelDirective, ZoomPanelListener } from './zoom-panel.directive';

/**
 * ZoomPanelContainerDirective is placed on an element that contains
 * multiple zoom panels (elements that have the zoom panel directive on them).
 * It's job is to ensure that only one panel is zoomed at a time.
 * When a panel is zoomed, the zoom panel directive for that panel notifies
 * the containing zoom panel container directive, which then zooms out all other
 * zoom panels within the container.
 */
@Directive({
  selector: '[zoomPanelContainer]'
})
export class ZoomPanelContainerDirective
  implements AfterViewChecked, ZoomPanelListener {

  /**
   * All of the zoom panels contained within this container element.
   */
  @ContentChildren(ZoomPanelDirective, { descendants: true })
  zoomPanels: QueryList<ZoomPanelDirective>;

  /**
   * Registers this directive as a listener on all contained zoom panels.
   */
  ngAfterViewChecked() {
    this.zoomPanels.forEach((panel) => panel.addListener(this));
  }

  /**
   * Zooms out all panels that are not equal to zoomedPanel.
   * @param zoomedPanel The panel that was just zoomed in
   */
  onZoomIn(zoomedPanel: ZoomPanelDirective) {
    this.zoomPanels.forEach((panel) => {
      if (panel !== zoomedPanel) {
        panel.zoomOut();
      }
    });
  }
}
