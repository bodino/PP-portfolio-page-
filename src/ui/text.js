import { styled } from "./stitches.config";

export const Text = styled('span', {
    color:"$background",
    // fontSize:"$100",
    // height:"18px"
    display:"flex",
    justifyContent:"center",
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


