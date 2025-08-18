import ChefClaudeLogo from '../assets/chef-claude-icon.png'

export default function Header() {
    return (
        <header className="Header">
            <nav>
                <img src={ChefClaudeLogo} alt="Chef Claude" />
                <h1>Chef Claude</h1>
            </nav>
        </header>
    )
}