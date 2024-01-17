"use client"

import Nav from "@/components/Nav/Nav";
import store from "@/store";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "@/components/Footer/Footer";
config.autoAddCss = false;

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider store={store}>
          <main>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>

    // <html>
    //   <body>
    //     <main>
    //       <Nav />
    //       {children}
    //     </main>
    //   </body>
    // </html>
  );
};

export default RootLayout;
