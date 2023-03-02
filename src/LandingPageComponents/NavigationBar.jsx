import './NavigationBar.scss';
import SearchBar from '../SearchBarComponents/SearchBar';
const NavigationBar = () => {
    return (
        <div className="navBar">
            <div className='navLogo'> Logo </div>
            <div className='navSearchBar'><SearchBar /></div>
            <div className='navCart'>Cart Icon</div>
        </div>
    );
}

export default NavigationBar;