import Create from "./Create"
import Menu from "./Menu"
import UserLoginBtn from "./UserLoginBtn"

function Header(){
    
    const isLoggedIn = false

    return(
        <div class="header">
            <Create />
            <Menu />

            {isLoggedIn ? (
                <h1>User</h1>
            ):(
                <UserLoginBtn />
            )}
        </div>
    )
}

export default Header

// oh Kevin my favorite hello
// ill kiss you just a little more slow

