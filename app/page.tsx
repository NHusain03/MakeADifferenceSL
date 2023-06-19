import Image from 'next/image';
import Hero2 from './components/hero2'
import RestOfHome from './components/home'
import RestOfHome2 from './components/restOfHome2'

export default function Home() {
  return (
    <>
      <Hero2 />
      <RestOfHome />
      <RestOfHome2/>
    </>

  )
}
