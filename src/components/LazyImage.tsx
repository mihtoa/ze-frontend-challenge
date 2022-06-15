import React, { useEffect } from 'react'
import styled from 'styled-components'

import LazyLoad from 'vanilla-lazyload'

const Image = styled.img`
  display: block;
  max-width: 100%;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: contain;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  background-color: white;

  &.loaded {
    opacity: 1;
  }
`

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
  })
}

type TypeLazyImageProps = {
  src: string
  alt: string
}

export default function LazyImage({ alt, src }: TypeLazyImageProps) {
  useEffect(() => {
    document.lazyLoadInstance.update()
  }, [])

  return <Image alt={alt} className="lazy" data-src={src} />
}
