import React, { useState } from "react";
import Seo from "../components/atoms/seo/seo";
import Input from "../components/atoms/Input/input";
import Button from "../components/atoms/Button/button";
import Link from "../components/atoms/Link/link";
import HamburgerButton from "../components/atoms/HamburgerButton/hamburgerButton";
import FAQElement from "../components/atoms/FAQElement/FAQElement";
import GlobalLayout from "../components/templates/GlobalLayout/GlobalLayout";


const IndexPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isBlack, setIsBlack] = useState(true);

  return (
    <GlobalLayout>
      <main>
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
          } }
          isOpen={isOpen}
          isBlack={isBlack}
          children={undefined} />
        <FAQElement question="Czy to jest pytanie?" answer="To jest przeraźliwie długa odpowiedź na pytanie." />
      </main>
    </GlobalLayout>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title="Strona główna" description={'Strona główna'} pathname={'/'} children={undefined} />
)
