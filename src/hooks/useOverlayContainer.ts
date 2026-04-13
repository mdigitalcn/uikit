'use client'

import { createContext, useContext } from 'react'

/**
 * Provides the DOM node of the nearest overlay (Modal, Drawer) content.
 * PopoverContent reads this to portal into the overlay's DOM tree instead of
 * document.body, which keeps it inside react-remove-scroll's allowed zone
 * and fixes wheel-scroll inside Select/MultiSelect/etc. when nested in overlays.
 */
export const OverlayContainerContext = createContext<Element | null>(null)

export function useOverlayContainer(): Element | null {
  return useContext(OverlayContainerContext)
}
