import * as React from "react";
import Seo from "../components/atoms/seo/seo";
import GlobalStyle from "../styles/GlobalStyles";
import Input from "../components/atoms/Input/input";


const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
      <h1>
        Strona główna
      </h1>
      <Input name="name" type="text" label="Imię" error=""/>
      <Input name="name" type="email" label="E-mail" error=""/>
      <Input name="" type="textarea" label="Wiadomość" error=""/>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title="Strona główna" description={'Strona główna'} pathname={'/'} children={undefined} />
)
