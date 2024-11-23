import logo from "../images/chef-logo.png"

export default function Header(){
    return(
        <header>
            <img src={logo} alt="logo"/>
            <h2>Chef AI</h2>
        </header>
    )
}