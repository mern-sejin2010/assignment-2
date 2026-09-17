import Logo from "../logo/logo";
export default function Header () {
    return (
        <div className="shadow-sm sticky top-0 bg-white z-5">
            <div className="navbar container px-3 mx-auto">
                <div className="navbar-start">
                    <MobileNav/>
                    <div className='flex items-center gap-1'>
                        <Logo/>
                        <p className='font-bold'>MovieExplorer</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        { ['Home', 'About', 'Contact'].map(link => 
                            <li key={link}>
                                <a href={link} className='btn btn-ghost bg-white text-black'>{link}</a>
                            </li>   
                            ) 
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-secondary" href='/movies'>Movies</a>
                </div>
            </div>
        </div>
    );  
};
const MobileNav = () => {
    return (
        <div className="dropdown mr-1">
            <div tabIndex={0} role="button" className="btn bg-white text-black shadow-none px-1 lg:hidden">
                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow-lg"
            >
                { ['Home', 'About', 'Contact'].map(link => 
                    <li key={link}>
                        <a href={link} className='btn btn-ghost bg-white text-black'>{link}</a>
                    </li>   
                    ) 
                }
            </ul>
        </div>
    );
};