import { useState } from 'react'
import React from 'react'
import { useAccount } from 'wagmi'
import '../App.css'

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
import Navabar from '../components/Navabar'


function Landingpage() {
  return (

    <Navabar/>

  )
}
export default Landingpage
