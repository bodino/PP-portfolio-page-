import { Provider, chain, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'
import { Buffer } from "buffer";

if (!window.Buffer) {
  window.Buffer = Buffer;
}
const infuraId = "d825deabe0454bbe8223e500dd8dd785"

// Chains for connectors to support
const chains = defaultChains

export const connectors = ({ chainId }) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0]
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      options: {
        appName: 'My wagmi app',
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ]
}