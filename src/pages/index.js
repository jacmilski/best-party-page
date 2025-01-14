import * as React from "react";
import Seo from "../components/atoms/seo/seo";
import GlobalStyle from "../styles/GlobalStyles";


const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
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
