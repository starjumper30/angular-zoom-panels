import { Directive, HostBinding, HostListener } from '@angular/core';

/**
 * Listener interface for receiving events when the panel is zoomed in.
 */
export interface ZoomPanelListener {
  /**
   * An event callback invoked when a panel is zoomed in.
   * @param panel The panel that was zoomed in
   */
  onZoomIn(panel: ZoomPanelDirective);
}

/**
 * The Zoom Panel Directive toggles a zoom class on its host element
 * as the host element is double-clicked.
 * If you wish to coordinate multiple zoom panels, you can use the
 * Zoom Panel Container directive on an element that contains all
 * of your zoom panel elements.
 */
@Directive({
  selector: '[zoomPanel]'
})
export class ZoomPanelDirective {
  /**
   * A listener (typically a Zoom Panel Container directive)
   * which listens for Zoom in events.
   * @private
   */
  private zoomListener: ZoomPanelListener | undefined;

  /**
   * The zoom property adds/removes the zoom css class to the host element
   */
  @HostBinding('class.zoom')
  zoom = false;

  /**
   * This click listener toggles the zoom property and notifies the listener
   */
  @HostListener('dblclick')
  onClick() {
    this.zoom = !this.zoom;
    if (this.zoom && this.zoomListener) {
      this.zoomListener.onZoomIn(this);
    }
  }

  /**
   * Sets the zoom property to false
   */
  zoomOut() {
    this.zoom = false;
  }

  /**
   * Registers a zoom listener
   * @param listener The listener
   */
  addListener(listener: ZoomPanelListener) {
    this.zoomListener = listener;
  }
}
