import { styled } from "./stitches.config";

export const Text = styled('span', {
    color:"$gray400",
    fontSize:"$100",
})

export const Button = styled('button', {
    color:"$buttoncolor",
    fontSize:"$100",
    backgroundColor:"$ButtonColor",
    // border: "2px solid $gray400 ",
    // borderRadius: "5px",
    '&:hover': {
        backgroundColor: '$colorsgray6',
      },
})


