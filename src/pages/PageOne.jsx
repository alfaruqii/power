import Hero from "../components/Hero";
import Content from "../components/Content"
import Footer from "../components/Footer"
import { pageOneContent } from "../data"
import { pageOneHeaders } from "../data"
import { titletype, pageOneOthers, pageOneOthersQuotes } from "../data"

const PageOne = () => {
  const dataProps = pageOneContent
  return (
    <>
      <Hero locate={pageOneHeaders} />
      <Content locate={[titletype[0], dataProps, pageOneOthers, pageOneOthersQuotes]} />
      <Footer />
    </>
  )
}

export default PageOne;
