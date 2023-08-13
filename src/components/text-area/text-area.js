import React from "react"

import * as styles from "./text-area.module.css"

const TextArea = ({
  label,
  labelClass = "",
  rows,
  placeholder,
  value,
  field,
  onChange,
  error,
  containerClass,
}) => {
  const handleChange = (e) => {
    onChange({ field, value: e.target.value })
  }
  return (
    <div className={`${styles.container} ${containerClass}`}>
      {label ? (
        <label className={`${labelClass}`}>
          <div>{label}</div>
        </label>
      ) : null}
      <textarea
        className={`form-control ${error ? styles.formError : ""}`}
        type="text"
        rows={rows ? rows : "3"}
        placeholder={placeholder ? placeholder : null}
        value={value ? value : ""}
        onChange={handleChange}
      />
      {error ? <div className={styles.error}>{error}</div> : null}
    </div>
  )
}

export default TextArea
