import SearchBar from "../../components/SearchBar";
import "./styles.sass";

const MainLayout = ({ children }) => {
  return (
    <>
      <SearchBar />
      <main className="container">{children}</main>
    </>
  );
};

export default MainLayout;
