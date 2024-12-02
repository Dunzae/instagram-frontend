import { Metadata, Viewport } from "next";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import { CounterStoreProvider } from "./zustand/providers/counter";

export const metadata: Metadata = {
  title: 'instagram',
  description: 'instagram clone project',
}

export const viewport : Viewport = {
  initialScale : 1,
  width : "device-width"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="dark ">
      <body>
        <ReactQueryProvider>
          <CounterStoreProvider>
            <main>
              {children}
            </main>
          </CounterStoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
