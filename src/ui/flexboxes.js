import { styled } from "./stitches.config";

export const LeftLargeItemsBox = styled('span', {

    display: "flex",
    alignContent: "center",
    padding:"",
    height:"50px",
    paddingTop:"10px",
    paddingInline:"20px",
    '@bp2': {
        display: "none",
      },

   
})

export const LeftSmallItemsBox = styled('span', {

    display: "flex",
    alignContent: "center",
    padding:"",
    height:"50px",
    paddingTop:"10px",
    paddingInline:"20px",
    '@bp1': {
        display: "none",
      },

   
})

export const RightItemsBox = styled('span', {

    display: "flex",
    alignContent: "center",
    padding:"",
    height:"50px",
    paddingTop:"10px",
    paddingInline:"20px",
 

   
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
    marginRight:"5px",
    marginLeft:"5px",
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




