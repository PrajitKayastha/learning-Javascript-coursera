let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated": "Not Authenticated"

if(userRole === "admin"){
    accessLevel = "**Full Access Granted**";
}else if(userRole === "manager"){
    accessLevel = "**Limited Access Granted**";
}else{
    accessLevel = "**No Access Granted**";
}


if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin!";
    }else{
        userMessage = "Welcome, User!";
    }
}else{
    userMessage = "Please log in to access the system";
}

switch(userType){
    case "admin":
        userCategory = "Adminstrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subcriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";

}


console.log("Access Level:", accessLevel);
console.log("User Message: ",userMessage);
console.log("User Category:", userCategory);
console.log("Athentication Status: ",authenticationStatus)