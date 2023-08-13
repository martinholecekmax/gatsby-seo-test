import React from "react"

import * as styles from "./spinner.module.css"

const Spinner = ({ className = "" }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.Loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Spinner
