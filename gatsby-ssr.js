import React from "react"

export const onRenderBody = ({
    setPostBodyComponents,
    setHtmlAttributes,
    setHeadComponents,
}) => {
    const htmlAttributes = { lang: "en" }
    const bodyScripts = []
    const headScripts = []

    setHeadComponents(headScripts)
    setPostBodyComponents(bodyScripts)
    setHtmlAttributes(htmlAttributes)
}

