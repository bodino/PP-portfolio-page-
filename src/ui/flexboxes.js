import { styled } from "./stitches.config";

export const Flexbox1 = styled('span', {

    display: "flex",
    alignContent: "center",
    padding:"",
    height:"50px",
    paddingTop:"10px",
    paddingInline:"20px"

   
})

export const NavabarContainer = styled('span', {

    display: "flex",
     alignContent: "center",
     justifyContent: "space-between",
    padding:"",
    height:"50px",
    paddingTop:"10px",
    flex: "1 1",
    maxWidth: "1000px",
    
})


export const IconBoxes = styled('span', {

    display: "flex",
    // alignContent: "center",
    marginInline:"5px",
    justifyContent:"center",
    alignItems:"center",
    width:"50px",
    height:"50px",
    // border: " solid",
    borderRadius: "5px",
    '&:hover': {
        backgroundColor: "$buttoncolor",

      },
})




