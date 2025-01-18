// @ts-nocheck
import React, { useState } from "react";
import Seo from "../components/atoms/seo/seo";
import GlobalStyle from "../styles/GlobalStyles";
import Input from "../components/atoms/Input/input";
import Button from "../components/atoms/Button/button";
import Link from "../components/atoms/Link/link";
import HamburgerButton from "../components/atoms/HamburgerButton/hamburgerButton";


const IndexPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isBlack, setIsBlack] = useState(true);

  return (
    <main>
      <GlobalStyle />
      <h1>
        Strona główna
      </h1>
      <Input name="name" type="text" label="Imię" error="" />
      <Input name="name" type="email" label="E-mail" error="" />
      <Input name="" type="textarea" label="Wiadomość" error="" />
      <Button text="Wyślij" type="submit" href="" />
      {/* <Link>Strona główna</Link> */}
      <HamburgerButton
        ariaLabel="Otwórz menu"
        openMenu={() => { 
          setIsOpen(!isOpen);
          setIsBlack(!isBlack);
        }}
        isOpen={isOpen}
        isBlack={isBlack}
      />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title="Strona główna" description={'Strona główna'} pathname={'/'} children={undefined} />
)
