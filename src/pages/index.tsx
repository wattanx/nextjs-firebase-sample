import { Center } from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { useContext } from 'react'
import { AuthContext } from '../components/Auth'
import { LoginButton, LogoutButton } from '../components/Button'

const Index = () => {
  const { currentUser } = useContext(AuthContext);
  
  return (
    <Container height="100vh">
      <Hero />
      <Main>
        <Center>
          {currentUser
            ? <LogoutButton />
            : <LoginButton />
          }
        </Center>
      </Main>
      <DarkModeSwitch />
    </Container>
  )
}

export default Index
