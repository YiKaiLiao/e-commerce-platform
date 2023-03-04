import './NavigationBar.scss';
import SearchBar from '../SearchBarComponents/SearchBar';
import FlyoutSigin from './FlyoutSignin';

const NavigationBar = () => {
    return (
        <div className="navBar">
            <div className='navBelt'>
                <div className='navLogo'> Logo </div>
                <div className='navSearchBar'><SearchBar /></div>
                <div className='navSignIn'>Signin</div>
                <div className='navCart'>Cart Icon</div>
            </div>
            <div className='navFlyout'>
                <FlyoutSigin />
            </div>
        </div>
    );
}

export default NavigationBar;