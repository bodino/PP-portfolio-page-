import { useState } from 'react'
import React from 'react'
import { useAccount } from 'wagmi'
import '../App.css'
import {
  TwitterLogoIcon,
  ImageIcon,
  SunIcon,
  HeartFilledIcon,
  Pencil1Icon,
  GitHubLogoIcon,
  LinkBreak2Icon,
  HomeIcon,
  FaceIcon,
} from '@radix-ui/react-icons'
import { styled, darkTheme, createGlobalStyle } from '../ui/stitches.config'
import { Text, Button } from '../ui/text.js'
import { ThemeToggle } from '../ThemeToggle'
import { Flexbox1, IconBoxes, NavabarContainer } from '../ui/flexboxes'
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { ThemeProvider } from 'next-themes'
import { violet } from '@radix-ui/colors';
import { Example } from '../components/Example'
import Connected from '../components/Connected'


const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: "$buttoncolor",
  '&[data-orientation=horizontal]': { height: 1, width: '50%' },
  '&[data-orientation=vertical]': { height: '50%', width: 1 },
  alignSelf: 'center',
});



// Exports
export const Separator = StyledSeparator;


function Landingpage() {


  return (
    <NavabarContainer>
    <Flexbox1>
      <IconBoxes>
        <HomeIcon />
      </IconBoxes>

      <IconBoxes>
        <Pencil1Icon />
      </IconBoxes>
      <Separator decorative orientation="vertical"css={{ margin: '0 15px' }}  />
      <IconBoxes>
        <GitHubLogoIcon />
      </IconBoxes>
    
      <IconBoxes>
        <TwitterLogoIcon />
      </IconBoxes>
   

     
    </Flexbox1>

    <Flexbox1>
    <IconBoxes>
        <ThemeToggle />
      </IconBoxes>

    
      <IconBoxes>
        <Example/>
      </IconBoxes>

    </Flexbox1>
   </NavabarContainer>
  )
}
export default Landingpage
