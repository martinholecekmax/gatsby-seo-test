import React, { useState } from "react"

import * as styles from "./dropdown.module.css"

const Dropdown = ({ children, title, defaultValue = false, id }) => {
  const [show, setShow] = useState(defaultValue)

  const toggle = () => {
    setShow((prevShow) => !prevShow)
  }

  return (
    <div id={id} className={styles.container}>
      <div onClick={toggle} role="presentation" className={styles.dropdownBar}>
        <div>{title}</div>
        {show ? (
          <img
            className={styles.icon}
            src="https://media.firstfence.co.uk/icons/chevron-up.svg"
            alt="chevronup"
            width="48"
            height="48"
            loading="lazy"
          />
        ) : (
          <img
            className={styles.icon}
            src="https://media.firstfence.co.uk/icons/chevron-down.svg"
            alt="chevrondown"
            width="48"
            height="48"
            loading="lazy"
          />
        )}
      </div>
      {show ? <div className={styles.content}>{children}</div> : null}
    </div>
  )
}

export default Dropdown
