import { BreadCrumbsLinks } from "./components/BreadCrumbs/types"
import { LoadButton } from "./components/Buttons/LoadButton";
import { Menu } from "./components/Menu";
import { ItemMenu } from "./components/Menu/types"
import { Page } from "./components/Page"
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import { Table, TBody, THead, Th, Tr, Td } from "./components/Table";
import { Card } from "./components/Card";
import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';
import { Input } from "./components/Forms/Input";
import { useRef, useState } from "react";
import { SelectInput } from "./components/Forms/Select";
import { MenuItem } from "@mui/material";
import { InputCheckBox } from "./components/Forms/CheckBox";
import { Modal } from "./components/Modal";

const MenuLinks:Array<ItemMenu> = [
  {
      Title: "Home",
      Link: "https://github.com/",
      Target: '_blank',
      Icon: <HomeIcon/>
  },
  {
      Title: "Pay",
      Link: "https://google.com/",
      Target: '_self',
      Icon: <PaymentIcon/>
  }
]

function App() {
  const formRef = useRef<FormHandles>(null);

  const [ModalTeste, SetModalTeste] = useState<boolean>(false);


  const Bread:BreadCrumbsLinks = {
    CurrentTitle: "App",
    Pass: [
        {
            Title: "Home",
            Link: "/"
        }
    ]
}

const handleOpenModal = () => {
  SetModalTeste(true);
};
const handleCloseModal = () => {
  SetModalTeste(false);
};

const handleData = (data:any) => {
  console.log(data);
}

  return (
    <Menu MenuItems={MenuLinks}>
      <Page Title="App" BreadCrumb={Bread}>
        <Modal Title="Teste Modal" Close={handleCloseModal} open={ModalTeste} SubTitle="Teste" maxWidth="md" fullScreen>
          <p>My Modal</p>
        </Modal>
        <Form onSubmit={handleData} ref={formRef}>
          <Input name="name" placeholder="Seu Nome..." label="Nome" variant="outlined"/>
          <SelectInput name="tipo" variant="outlined" label="Tipo">
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="commum">Normal</MenuItem>
          </SelectInput>
          <InputCheckBox label="lgpd" name="lgpd"/>
          <LoadButton name="sub" title="Enviar" type="submit"/>
          <LoadButton onClick={e => {
            e.preventDefault();
            handleOpenModal();
          }} name="a" title="Abrir Modal" type="button"/>
        </Form>
      </Page>
    </Menu>
  )
}

export default App;