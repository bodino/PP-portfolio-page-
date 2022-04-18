import { useState } from 'react';
import React from 'react';
import { css } from '../ui/stitches.config';
import {styled, darkTheme, createGlobalStyle} from '../ui/stitches.config';
import {Text, Button} from '../ui/text.js';
import { Example } from '../components/Example'
import { ThemeProvider } from 'next-themes';
import { Flexbox1, IconBoxes, NavabarContainer } from '../ui/flexboxes'
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { ThemeToggle } from '../ThemeToggle'
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'



import {
    TwitterLogoIcon,
    Pencil1Icon,
    GitHubLogoIcon,
    HomeIcon,
    HamburgerMenuIcon,
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

  //generate state variable for homeclick status
  const [homeClick, setHomeClick] = useState(true);
  const [writingClick, setWritingClick] = useState(false);

  //create function to handle homeclick
  const handleHomeClick = () => {
    setHomeClick(true);
    setWritingClick(false);
  }
  //create function to handle writingclick
  const handleWritingClick = () => {
    setHomeClick(false);
    setWritingClick(true);
  }


  return (
    <NavabarContainer>
  <MediaQuery minWidth={650}>
    <Flexbox1>
      <IconBoxes onClick={handleHomeClick} css={{backgroundColor: homeClick ? "$buttoncolor" : ""}}>
        <HomeIcon />
      </IconBoxes>

      <IconBoxes onClick={handleWritingClick} css={{backgroundColor: writingClick ? "$buttoncolor" : ""}}>
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
    </MediaQuery>
    <MediaQuery maxWidth={649}>
    <Flexbox1>
      <IconBoxes>
        <HamburgerMenuIcon></HamburgerMenuIcon>
      </IconBoxes>
    </Flexbox1>
    </MediaQuery>
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
