import type { AppProps } from "next/app";
import StakingStatusProvider from "../contexts/StakingStatusUpdate";
import PopupProvider from "../contexts/popup";
import Web3ModalProvider from "../contexts/Web3ModalProvider";
import SmartContractProvider from "../contexts/SmartContractProvider";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <BlockchainProviders>
        <PopupProvider>
          <StakingStatusProvider>
          <Component {...pageProps} />
          </StakingStatusProvider>
        </PopupProvider>
      </BlockchainProviders>
  );

}

const BlockchainProviders = (props: any) => {
  return (
    <Web3ModalProvider>
      <SmartContractProvider>
          {props.children}
      </SmartContractProvider>
    </Web3ModalProvider>
  )
}

export default MyApp;
