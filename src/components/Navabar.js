import { useState } from 'react';
import React from 'react';
import {styled, darkTheme, createGlobalStyle} from '../ui/stitches.config';
import {Text, Button} from '../ui/text.js';
import { Example } from '../components/Example'
import { ThemeProvider } from 'next-themes';
import { Flexbox1, IconBoxes, NavabarContainer } from '../ui/flexboxes'
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { ThemeToggle } from '../ThemeToggle'



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
  } from '@radix-ui/react-icons';

  const StyledSeparator = styled(SeparatorPrimitive.Root, {
    backgroundColor: "$buttoncolor",
    '&[data-orientation=horizontal]': { height: 1, width: '50%' },
    '&[data-orientation=vertical]': { height: '50%', width: 1 },
    alignSelf: 'center',
  });
  
  
  
  // Exports
  export const Separator = StyledSeparator;

function Navabar() {

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
  );
}
export default Navabar;
