import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import { useEffect, useState } from "react";

const config = createConfig(
  getDefaultConfig({

    alchemyId: "MzUaa0A87yexjd8UKcHm8HIr1f4aghxT",
    walletConnectProjectId: "a8024e8262cb4e7102941a3577b5a5c0",


    appName: "Token Swap Dapp",


    appDescription: "This app is developed as an assignment of GDSC",
  })
);

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <ConnectKitButton />
          {mounted && <Component {...pageProps} />}
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
}
