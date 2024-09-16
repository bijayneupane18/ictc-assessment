import Footer from "./footer/Footer";
import Header from "./header/Header";

type childrenProp = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: childrenProp) => {
  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-screen-2xl p-4 md:px-6 2xl:px-10">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
