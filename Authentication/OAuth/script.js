//Initializing the Auth0 client -> we can use Auth0's services after this

let auth0 = null;

const configureClient = async()=>{
        auth0 = await createAuth0Client({
        domain: "dev-cbr4ao4mvdmskc0p.us.auth0.com",
        client_id: "4r9mXejIzI8dr6V1WFL5t3li4XvewAEw",
    });
}

//Login with Auth0
document.querySelector("#login-button").addEventListener('click', async ()=> {
    await auth0.loginWithRedirect({
        redirect_uri: window.location.origin //-> the current url page (redirects to that)
    });
});

//After login, handling the callback
// window.onload => fires when the page is loaded -> checks if user is already logged in

window.onload = async () =>{
    await configureClient();

 const isAuthenticated = await auth0.isAuthenticated(); //checks if there's a valid session

 if (isAuthenticated){  //if yes, retrieves the user's info from Auth0
    const user = await auth0.getUser();
    console.log('user: ', user);
 }
 // if not logged in, this handles the callback from Auth0 after the uesr logs in
else   
 {
    await auth0.handleRedirectCallback();
    //NOTE When a user successfully logs in with an OAuth provider (like Google or Auth0), they are redirected back to your app. During this redirection, the provider includes a special authorization code in the URL, which your app needs to handle properly to finish the login process.
    //This function is responsible for taking the authorization code from the URL and sending it to Auth0's servers to exchange it for an access token.

    //-- after handling the redirect, checking if authenticated again
    const user = await auth0.getUser();
    console.log('user: ', user);
 }
};