var user = "default";

switch (user){
    case "super admin":
        console.log("you have full access");
        break;
    case "admin":
        console.log("you have full access but you cant delete")
        break;
    case "default":
        console.log ("you have no access");
        break;

}