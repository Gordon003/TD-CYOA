import { useGlobalState } from '../state/GlobalState';
import { usePlayerState } from '../state/PlayerState';

import './LeftSidebar.css';

export default function ProfileSidebar() {

    const [{ teamMembers }] = useGlobalState();
    const [{ playerTeam } ] = usePlayerState();

    let element = []

    return (
        <div id="profileSidebar" className="leftSidebar">

            <h3> Profile </h3>
            <p> Team: {playerTeam} </p>

        </div>
    )

}