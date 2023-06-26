import Layout from "./components/Layout/Layout.component";
import Header from "./components/Header/Header.componet";
import Sections from "./components/Sections/Sections.component";
import Footer from "./components/Footer/Footer.componet";

const App = () => {
  return (
    <Layout>
      <Header />
      <Sections />
      <Footer />
    </Layout>
  );
};
export default App;
