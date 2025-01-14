import * as React from "react"
import Seo from "../components/atoms/seo/seo"

const IndexPage = () => {
  return (
    <main>
      <h1>
        Strona główna
      </h1>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title="Strona główna" description={'Strona główna'} pathname={'/'} children={undefined} />
)
