import type { SwiperProps } from 'swiper/react'

export interface CarouselClassNames {
  /**
   * Class name for the root container
   */
  root?: string

  /**
   * Class name for the wrapper element
   */
  wrapper?: string

  /**
   * Class name for individual slides
   */
  slide?: string

  /**
   * Class name for the navigation container
   */
  navigation?: string

  /**
   * Class name for navigation buttons
   */
  navButton?: string

  /**
   * Class name for the pagination container
   */
  pagination?: string

  /**
   * Class name for pagination dots
   */
  dot?: string

  /**
   * Class name for active pagination dot
   */
  dotActive?: string
}

export interface CarouselProps extends SwiperProps {
  withArrows?: boolean
  withPagination?: boolean
  children: React.ReactNode
  /**
   * ClassNames for component parts
   */
  classNames?: CarouselClassNames
  /**
   * Accessible label for the carousel
   */
  ariaLabel?: string
}
