'use client'

import { cva } from 'class-variance-authority'
import React, { useEffect, useRef, useState } from 'react'

import { cn } from '../utils'

import { ImageProps } from './types'

const imageVariants = cva('', {
  variants: {
    fit: {
      cover: 'object-cover',
      contain: 'object-contain',
      fill: 'object-fill',
      none: 'object-none',
      'scale-down': 'object-scale-down',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    fit: 'cover',
    radius: 'md',
  },
})

const Image = React.memo<ImageProps>(({
  src,
  withBlur,
  className,
  classNames,
  fallbackSrc,
  fetchPriority = 'auto',
  loading,
  aspectRatio,
  fit = 'cover',
  radius = 'md',
  ...props
}) => {
  const [imageError, setImageError] = useState(false)
  const [fallbackError, setFallbackError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    setImageError(false)
    setFallbackError(false)
    setIsLoaded(false)

    const img = imageRef.current
    if (img?.complete && img?.naturalWidth > 0) {
      setIsLoaded(true)
    }
  }, [src])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    if (imageError) {
      setFallbackError(true)
    } else {
      setImageError(true)
    }
  }

  // Determine loading strategy
  const loadingStrategy = loading ?? (fetchPriority === 'high' ? 'eager' : 'lazy')

  // Both primary and fallback failed - render nothing
  if (imageError && fallbackError) {
    return null
  }

  const imgElement = (
    <img
      ref={imageRef}
      onLoad={handleLoad}
      onError={handleError}
      src={imageError ? fallbackSrc : src}
      className={cn(
        'image_image',
        imageVariants({ fit, radius }),
        !isLoaded && 'opacity-0',
        isLoaded && 'opacity-100',
        'transition-opacity duration-500 ease-in-out',
        imageError && 'image_error',
        imageError && classNames?.error,
        classNames?.image,
        className,
      )}
      style={{ ...(aspectRatio ? { aspectRatio } : {}), ...(props.style || {}) }}
      {...props}
      alt={props.alt}
      loading={loadingStrategy}
      fetchPriority={fetchPriority}
    />
  )

  // Without blur: render img directly, no wrapper
  if (!withBlur) {
    return imgElement
  }

  // With blur: wrapper needed for placeholder overlay
  return (
    <div
      data-slot="root"
      className={cn(
        'image_root',
        'relative overflow-hidden',
        classNames?.root,
      )}
      style={{
        width: props.width ? `${props.width}px` : undefined,
        height: props.height ? `${props.height}px` : undefined,
      }}
    >
      {!isLoaded && (
        <div
          className={cn(
            'image_placeholder',
            'absolute inset-0 animate-pulse bg-gradient-to-r from-surface via-background to-surface',
            classNames?.placeholder
          )}
        />
      )}
      {imgElement}
    </div>
  )
})

Image.displayName = 'Image'

export type * from './types'
export default Image
