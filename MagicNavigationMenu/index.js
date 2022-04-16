const myname=()=>
{
    console.log("This Myname methods");
}


const myage=()=>
{
    console.log("This Methods myage");
    myname();
    console.log("This Method lastname");
}

myage();