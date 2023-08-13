import React from "react"

import * as styles from "./image.module.css"

const Image = ({
  src,
  alt = "No Title",
  className = null,
  defaultURL = "https://first-fence-ltd.mo.cloudinary.net/icons/no-image.jpg",
  height,
  width,
  sources = [],
  loading = "lazy",
}) => {
  const onError = (e) => {
    if (e.target.src !== defaultURL) {
      e.target.src = defaultURL
    }
  }

  return (
    <picture>
      {sources.map((source, i) => (
        <source key={i} srcSet={source.srcSet} media={source.media} />
      ))}
      <img
        src={src || defaultURL}
        onError={onError}
        alt={alt}
        height={height}
        width={width}
        rel="preconnect"
        className={className ? className : styles.image}
        loading={loading}
      />
    </picture>
  )
}

export default Image
