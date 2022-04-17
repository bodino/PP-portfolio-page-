import { useConnect } from 'wagmi'
import '../ui/dropdowns';
import { LinkBreak2Icon } from '@radix-ui/react-icons';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdowns';
var x = 0;
var walletarray = [3];


export const Example = () => {
  const [{ data, error }, connect] = useConnect()
 

  data.connectors[0].logo = "https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg";
  data.connectors[1].logo = "https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/svg/original/walletconnect-logo.svg"
  data.connectors[2].logo = "https://avatars.githubusercontent.com/u/18060234?s=200&v=4"
  return (
    <DropdownMenu>
        
  <DropdownMenuTrigger><LinkBreak2Icon/></DropdownMenuTrigger>
  <DropdownMenuContent>
      {data.connectors.map((connector) => (
          <DropdownMenuItem  disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect(connector)}>
             <img style={{width:"15px", paddingRight:"10px"}}src={connector.logo}/>


          {connector.name}
          {!connector.ready && ' (unsupported)'}
        </DropdownMenuItem>
        
      ))}

      {/* {error && <div>{error?.message ?? 'Failed to connect'}</div>} */}
      </DropdownMenuContent>
    </DropdownMenu>    
  )
}