import { Routes, Route, Link } from 'react-router-dom';
import { AuthData } from '../../auth/AuthWrapper';
import nav from './Navigation';

export const RenderRoutes = () => {

    const {user} = AuthData()

    return (
        <>
        <Routes>
            {nav.map((r,i) => {
                if (r.isPrivate && user.isAuthenticated){
                    return <Route key={i} path={r.path} element={r.element}/>
                } else if (!r.isPrivate) {
                    return <Route key={i} path={r.path} element={r.element}/>
                } else return true
            })}
        </Routes>
        </>
    )
}

export const RenderMenu = () => {

    const {user, logout} = AuthData();

    const MenuItem = ({r}) => {
        return (
            <div className='menuItem'><Link to={r.path}>{r.name}</Link></div>
        )
    }

    return(
        <div className='menu'>
            {nav.map((r,i) => {
                // if root not private and it is a menu - output menu item
                if (!r.isPrivate && r.isMenu){
                    return (
                        <MenuItem key={i} r={r}/>
                    )
                // if user is authenticated and its a menu - show that menu item
                } else if (user.isAuthenticated && r.isMenu){
                    return (
                        <MenuItem key={i} r={r}/>
                    )
                } else return false

            // if user is authenticated then show a logout button, otherwise show login button
            } )}
            
            {user.isAuthenticated ?
            <div className="menuItem"><Link to={'#'} onClick={logout}>Logout</Link></div>
            :
            <div className="menuItem"><Link to={'login'}>Login</Link></div>
            }
            
            
        </div>
    )
}