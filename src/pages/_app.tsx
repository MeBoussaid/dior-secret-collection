import "../styles/_globals.scss";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { LoginProvider } from "../../stores/LoginStore";
import { CartProvider } from "../../stores/CartStore";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <LoginProvider>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </LoginProvider>
    </CartProvider>
  );
}
