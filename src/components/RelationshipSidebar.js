import { useGlobalState } from '../state/GlobalState';

import './RelationshipSidebar.css';

export default function RelationshipSideBar() {

    const [{ teamMembers }] = useGlobalState();

    const teamList = Object.keys(teamMembers);

    let element = []

    return (
        <div id="rightSidebar">

            <h2> Relationships </h2>

            {
                teamList.map((item) => {
                    return (
                        <>
                            <h3 className="sidebar-h3"> {item} </h3>
                            <ul>
                            {
                                teamMembers[item].map((name, index) => {
                                    return (
                                        <li className='sidebar-p' key={index}> {name} </li>   
                                    )
                                })
                            }
                            </ul>
                        </>
                    )
                    // teamList[item].map((name, index) => {
                    //     return (
                    //         <p key={index}> {name} </p>
                    //     )
                    // })
                })
            }

        </div>
    )

}