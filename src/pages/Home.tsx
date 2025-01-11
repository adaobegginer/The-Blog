import "../assets/styles/pagesStyles/home.css";
import Articles from "../components/articles";
import Filter from "../components/filter.component";
import RootLayout from "./Layout";
export default function Home() {
  return (
    <RootLayout>
      <div className="px-[16rem] py-[8.2rem]">
        <Filter></Filter>
        <Articles></Articles>
      </div>
    </RootLayout>
  );
}
