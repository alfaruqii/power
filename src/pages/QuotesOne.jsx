import Content from "../components/Content";
import Footer from "../components/Footer";
import { titletype, quotesOne } from "../data";

export default function QuotesOne() {
  return (
    <>
      <Content locate={[titletype[2], quotesOne,]} />
      <div className="mt-24 sm:mt-[18vh]">
      </div>
      <Footer />
    </>
  )
}
