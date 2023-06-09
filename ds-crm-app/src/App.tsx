import { BreadCrumbsLinks } from "./components/BreadCrumbs/types"
import { LoadButton } from "./components/Buttons/LoadButton";
import { Menu } from "./components/Menu";
import { ItemMenu } from "./components/Menu/types"
import { Page } from "./components/Page"
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';

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
        <LoadButton name="teste" title="My Btn" size="large" variant="contained"/>
        <LoadButton name="teste" title="My Btn" size="large" variant="outlined"/>
      </Page>
    </Menu>
  )
}

export default App
