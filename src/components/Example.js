import { useConnect, useAccount } from 'wagmi'
import '../ui/dropdowns'
import { CrossCircledIcon, FaceIcon, LinkBreak2Icon } from '@radix-ui/react-icons'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdowns'
import Connected from './Connected'
import makeBlockie from 'ethereum-blockies-base64';

var x = 0
var walletarray = [3]

export const Example = () => {
    const [{ data, error }, connect] = useConnect()
    const [{ data: accountData }, disconnect] = useAccount({
        fetchEns: true,
    })

    data.connectors[0].logo =
        'https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg'
    data.connectors[1].logo =
        'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/svg/original/walletconnect-logo.svg'
    data.connectors[2].logo =
        'https://avatars.githubusercontent.com/u/18060234?s=200&v=4'

    if (!accountData)
        return (
            <>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <LinkBreak2Icon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {data.connectors.map((connector) => (
                            <DropdownMenuItem
                                disabled={!connector.ready}
                                key={connector.id}
                                onClick={() => connect(connector)}
                            >
                                <img
                                    style={{ width: '15px', paddingRight: '10px' }}
                                    src={connector.logo}
                                />

                                {connector.name}
                                {!connector.ready && ' (unsupported)'}
                            </DropdownMenuItem>
                        ))}

                        {/* {error && <div>{error?.message ?? 'Failed to connect'}</div>} */}
                    </DropdownMenuContent>
                </DropdownMenu>
            </>
        )
    else
        return (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <FaceIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent>

                <DropdownMenuItem><img style={{ width: '15px', paddingRight: '10px', paddingLeft: '1.8px' }}   src={ accountData.ens ? accountData.ens?.avatar : makeBlockie(accountData.address)} /> 
                    {accountData.ens?.name
            ? `${accountData.ens?.name} (${accountData.address})`
            : accountData.address.substring(0, 5) + '...' +accountData.address.substring(38, 42)}</DropdownMenuItem>
                    <DropdownMenuItem onClick={disconnect}> <CrossCircledIcon style={{ width: '18px', paddingRight: '10px' }}/>Disconnect</DropdownMenuItem>

                    {/* {error && <div>{error?.message ?? 'Failed to connect'}</div>} */}
                </DropdownMenuContent>
            </DropdownMenu>
        )
}
export default Example
