import { BreadCrumbsLinks } from "./components/BreadCrumbs/types"
import { LoadButton } from "./components/Buttons/LoadButton";
import { Menu } from "./components/Menu";
import { ItemMenu } from "./components/Menu/types"
import { Page } from "./components/Page"
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import { Table, TBody, THead, Th, Tr, Td } from "./components/Table";
import { Card } from "./components/Card";

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
  const Bread:BreadCrumbsLinks = {
    CurrentTitle: "App",
    Pass: [
        {
            Title: "Home",
            Link: "/"
        }
    ]
}
  return (
    <Menu MenuItems={MenuLinks}>
      <Page Title="App" BreadCrumb={Bread}>
        <h3>Página App</h3>
        <Card $width="50%">
          This is My Text
        </Card>
      </Page>
    </Menu>
  )
}

export default App
