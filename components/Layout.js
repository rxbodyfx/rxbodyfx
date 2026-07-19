import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="font-body">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
