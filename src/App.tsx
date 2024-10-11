import { Heading } from "@chakra-ui/react"
import { useEffect } from "react"
import apiClient from "./services/apiClient";

interface Receipe {
  title: string,
  ingr: string[]
}


function App() {
 
  useEffect(() => {
    apiClient.post<Receipe>('', { title: 'onion soup', ingr: ['3 onions', '300g cheese']})
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
  }, [])


  return (
    <>
     <Heading>books</Heading>
    </>
  )
}

export default App
