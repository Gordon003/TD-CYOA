import { useGlobalState } from '../state/GlobalState';

import './LeftSidebar.css';

export default function RelationshipSideBar() {

    const [{ teamMembers }] = useGlobalState();

    const teamList = Object.keys(teamMembers);

    return (
        <div id="relationshipSidebar">

            {
                teamList.map((item, index) => {
                    return (
                        <div key={index}>
                            <h3 className="sidebar-h3"> {item} </h3>
                            <ul>
                            {
                                teamMembers[item].map((name, index2) => {
                                    return (
                                        <li className='sidebar-p' key={index2}> {name} </li>   
                                    )
                                })
                            }
                            </ul>
                        </div>
                    )
                })
            }

        </div>
    )

}