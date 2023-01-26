import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const arrow= {
    color: "rgb(167, 172, 178)",
    position: "relative",
    top: "0px",
    left: "-55%",
    fontSize: "1.3rem",
    marginRight: "-5px"
};

const sublinks = [
    {
        id: 1,
        name: "Best Sellers",
        drop: ''
    },
    {
        id: 2,
        name: "Mobiles",
        drop: ''
    },
    {
        id: 3,
        name: "Today's Deals",
        drop: ''
    },
    {
        id: 4,
        name: "Customer Service",
        drop: ''
    },
    {
        id: 5,
        name: "Books",
        drop: ''
    }
    ,
    {
        id: 6,
        name: "Electronics",
        drop: ''
    },
    {
        id: 7,
        name: "Prime",
        drop: <ArrowDropDownIcon style={arrow}/>
    },
    {
        id: 8,
        name: "Fashion",
        drop: ''
    },
    {
        id: 9,
        name: "New Releases",
        drop: ''
    },
    {
        id: 10,
        name: "Home & Kitchen",
        drop: ''
    },
    {
        id: 11,
        name: "Amazon Pay",
        drop: ''
    }
  ];
  
  export default sublinks;
  