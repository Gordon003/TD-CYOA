import { useGlobalState } from '../state/GlobalState';
import { usePlayerState } from '../state/PlayerState';

import './LeftSidebar.css';

export default function ProfileSidebar() {

    const [{ teamMembers }] = useGlobalState();
    const [{ playerTeam, playerName } ] = usePlayerState();

    let element = []

    return (
        <div id="profileSidebar" className="leftSidebar">

            <h3> Profile: {playerName} </h3>
            <p> Team: {playerTeam} </p>

        </div>
    )

}