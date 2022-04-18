import { useConnect, useAccount, useTransaction } from 'wagmi'
import '../ui/dropdowns'
import {
  CookieIcon,
  CrossCircledIcon,
  FaceIcon,
  HamburgerMenuIcon,
  HomeIcon,
  Pencil1Icon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkBreak2Icon,
} from '@radix-ui/react-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/navbardropdown'
import Connected from './Connected'
import makeBlockie from 'ethereum-blockies-base64'
import { BigNumber } from 'ethers'
import { styled, darkTheme } from '../ui/stitches.config'
import { RotateHamburger, Text } from '../ui/text'
import { Flexbox1 } from '../ui/flexboxes'
import { IconBoxes } from '../ui/flexboxes'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { css } from '../ui/stitches.config'
import * as SeparatorPrimitive from '@radix-ui/react-separator';




var x = 0
var walletarray = [3]

function Verticalnavbarcomp({homeClick,handleHomeClick,writingClick,handleWritingClick}) {
  return (
    <DropdownMenu>
               

      <DropdownMenuTrigger>
      <RotateHamburger>

       <HamburgerMenuIcon/>
       </RotateHamburger>

      </DropdownMenuTrigger>
     
      <DropdownMenuContent>

      <DropdownMenuItem onClick={handleHomeClick} css={{backgroundColor: homeClick ? "$buttoncolor" : ""}}>       
      <IconBoxes >
        <HomeIcon />
      </IconBoxes>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={handleWritingClick} css={{backgroundColor: writingClick ? "$buttoncolor" : ""}}>        
      <IconBoxes >
        <Pencil1Icon />
      </IconBoxes>
      </DropdownMenuItem>
  
      <DropdownMenuItem>       

      <IconBoxes>
        <GitHubLogoIcon />
      </IconBoxes>
      </DropdownMenuItem>

      <DropdownMenuItem>       

      <IconBoxes>
        <TwitterLogoIcon/>
      </IconBoxes>
      </DropdownMenuItem>


     

    

        {/* {error && <div>{error?.message ?? 'Failed to connect'}</div>} */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default Verticalnavbarcomp
