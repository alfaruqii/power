import Content from "../components/Content"
import Footer from "../components/Footer"
import { titletype, obedienceOne, obedienceOneOthers, obedienceOneOthersQuotes } from "../data"

export default function SubPagesOne() {
  return (
    <>
      <Content locate={[titletype[1], obedienceOne, obedienceOneOthers, obedienceOneOthersQuotes]} />
      <Footer />
    </>
  )
}
