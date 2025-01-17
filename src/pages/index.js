// @ts-nocheck
import * as React from "react";
import Seo from "../components/atoms/seo/seo";
import GlobalStyle from "../styles/GlobalStyles";
import Input from "../components/atoms/Input/input";
import Button from "../components/atoms/Button/button";
import Link from "../components/atoms/Link/link";


const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
      <h1>
        Strona główna
      </h1>
      <Input name="name" type="text" label="Imię" error=""/>
      <Input name="name" type="email" label="E-mail" error=""/>
      <Input name="" type="textarea" label="Wiadomość" error="" />
      <Button text="Wyślij" type="submit" href="" />
      <Link>Strona główna</Link>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title="Strona główna" description={'Strona główna'} pathname={'/'} children={undefined} />
)
