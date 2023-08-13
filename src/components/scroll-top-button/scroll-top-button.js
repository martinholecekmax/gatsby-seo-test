import React from "react"
import ScrollToTop from "react-scroll-up"

import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import * as styles from "./scroll-top-button.module.css"

const ScrollTopButton = () => {
  return (
    <ScrollToTop
      showUnder={160}
      style={{ bottom: `20px`, right: `20px`, zIndex: `10` }}
    >
      <div className={styles.scrollTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </ScrollToTop>
  )
}

export default ScrollTopButton
