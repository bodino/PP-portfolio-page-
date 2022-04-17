import { useConnect, useAccount, useTransaction } from 'wagmi'
import '../ui/dropdowns'
import { CookieIcon, CrossCircledIcon, FaceIcon, LinkBreak2Icon } from '@radix-ui/react-icons'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdowns'
import Connected from './Connected'
import makeBlockie from 'ethereum-blockies-base64';
import { BigNumber } from 'ethers'
import { styled, darkTheme } from "../ui/stitches.config";
import { Text } from '../ui/text'


var x = 0
var walletarray = [3]

export const Example = () => {
    const [{ data, error }, connect] = useConnect()
    const [{ data: accountData }, disconnect] = useAccount({
        fetchEns: true,
    })

    const [{ transdata, transerror, loading }, sendTransaction] = useTransaction({
        request: {
          to: 'awkweb.eth',
          value: BigNumber.from('1000000000000000'), // 1 ETH
        },
      })

    data.connectors[0].logo =
        '/metamask-fox.svg'
    data.connectors[1].logo =
        '/walletconnect-logo.svg'
    data.connectors[2].logo =
        '/coinbasewallet-logo.png'
    if (!accountData)
        return (
       
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

        )
    else
        return (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <FaceIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent>

                    <DropdownMenuItem onClick={() => {navigator.clipboard.writeText(accountData.address)}}>
                        <img style={{ width: '15px', paddingRight: '11.75px', paddingLeft: '1.75px' }}   src={ accountData.ens ? accountData.ens?.avatar : makeBlockie(accountData.address)} /> 
                        {accountData.ens?.name ? `${accountData.ens?.name} (${accountData.address})`: accountData.address.substring(0, 5) + '...' +accountData.address.substring(38, 42)}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={async () => await sendTransaction()}> 
                        <Text>
                            <CookieIcon style={{ width: '18px', paddingRight: '10px', height:'18px'  }}/>
                        </Text>
                            Buy Me Coffee
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={disconnect}> <Text><CrossCircledIcon  style={{ width: '18px', paddingRight: '10px', height:'18px' }} /></Text>Disconnect</DropdownMenuItem>

                        {/* {error && <div>{error?.message ?? 'Failed to connect'}</div>} */}
                </DropdownMenuContent>
            </DropdownMenu>
        )
}
export default Example
