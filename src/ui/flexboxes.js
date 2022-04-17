import { styled } from "./stitches.config";

export const Flexbox1 = styled('span', {

    display: "flex",
    // alignContent: "center",
    padding:"",
    height:"50px",
    paddingTop:"10px",
})

export const IconBoxes = styled('span', {

    display: "flex",
    // alignContent: "center",
    marginInline:"5px",
    justifyContent:"center",
    alignItems:"center",
    width:"50px",
    height:"50px",
    '&:hover': {
        backgroundColor: "$buttoncolor",
        border: "2px solid $gray400 ",
        borderRadius: "5px",
      },
})




