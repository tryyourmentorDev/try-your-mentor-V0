// pages/_app.js
// import "@/styles/globals.css"; // Import your global styles
import "../styles/App.css";
import "../styles/globals.css";

import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
