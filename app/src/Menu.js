import './Menu.css';
import { HiHome } from 'react-icons/hi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaProjectDiagram } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { CgShortcut } from 'react-icons/cg';
import { BsDatabaseFillGear } from 'react-icons/bs';


const Menu = () => {
    return (
        <div className="Menu row-span-8">
            <h1 className="text-2xl font-sembold py-6 text-right mr-2">KréMY</h1>
            <hr className="border-1 border-gray-500 mx-2" />
            <ul className="flex flex-col justify-around">
                <li className="flex justify-between p-2">
                    <HiHome />
                    <button>Home</button>
                </li>
                <li className="flex justify-between p-2">
                    <LuLayoutDashboard />
                    <button>Dashboard</button>
                </li>
                <li className="flex justify-between p-2">
                    <FaProjectDiagram />
                    <button>Projects</button>
                </li>
                <li className="flex justify-between p-2">
                    <IoMdSettings />
                    <button>Settings</button>
                </li>
                <li className="flex justify-between p-2">
                    <CgShortcut />
                    <button>Shortcuts</button>
                </li>
                <li className="flex justify-between p-2">
                    <BsDatabaseFillGear />
                    <button>Database</button>
                </li>
            </ul>

        </div>

    );
}
 
export default Menu;