import Header from './Header';
import Footer from './Footer';
import OrgSchema from './OrgSchema';

export default function Layout({ children }) {
  return (
    <div className="font-body">
      <OrgSchema />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
