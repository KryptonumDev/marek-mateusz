import React from "react"
import NextImage from "next/image"

const defaultPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/v7NfwAJigPTkfv+7gAAAABJRU5ErkJggg==";

const Img = ({
  data,
  src,
  alt = '',
  width,
  height,
  ...props
}) => (
  <NextImage
    src={data?.asset.url || src}
    alt={data?.asset.altText || alt}
    width={data?.asset.metadata?.dimensions?.width || data?.asset.metadata?.width || width}
    height={data?.asset.metadata?.dimensions?.height || data?.asset.metadata?.height || height}
    blurDataURL={data?.asset.metadata?.lqip || defaultPlaceholder}
    placeholder="blur"
    {...props}
  />
)

export default Img;