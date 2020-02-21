import React from "react"

export default ({ pageContext }) => {
  return (
    <div>
      <h1>
        <span dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      </h1>
    </div>
  )
}
