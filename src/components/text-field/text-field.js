import React from "react"

import * as styles from "./text-field.module.css"

const TextField = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  containerClass = "",
  field,
}) => {
  const handleChange = (e) => {
    onChange({ field, value: e.target.value })
  }

  return (
    <div className={`${styles.container} ${containerClass}`}>
      {label ? (
        <label>
          <div className={styles.label}>{label}</div>
        </label>
      ) : null}
      <input
        className={`form-control ${error ? styles.formError : ""}`}
        type="text"
        placeholder={placeholder ? placeholder : null}
        value={value ? value : ""}
        onChange={handleChange}
      />
      {error ? <div className={styles.error}>{error}</div> : null}
    </div>
  )
}

export default TextField
