import {React} from 'react'

export default function Header() {
  const [isLangOpen , setLangOpen] = useState(false)
  const [isCurrencyOpen , setCurrencyOpen] = useState(false)

  return (
    <>
      <MainHeader button={true} />
      <HeaderNavbar />
    </>
  )
}
