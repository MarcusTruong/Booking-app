import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <Hero></Hero>
      {/* flex-1 se chiem het moi dien tich con lai cua div cha */}
      <div className="container mx-auto py-10 flex-1 ">
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
