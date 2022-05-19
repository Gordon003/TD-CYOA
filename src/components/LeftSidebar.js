import { useGlobalState } from '../state/GlobalState';
import { usePlayerState } from '../state/PlayerState';

import RelationshipSidebar from './RelationshipSidebar';

import './LeftSidebar.css';

function ProfileBar() {

    const [{ playerTeam, playerName } ] = usePlayerState();

    return (

        <div>
            <h3> Profile: {playerName} </h3>
            <p> Team: {playerTeam} </p>
        </div>

    )
}

export default function LeftSidebar() {

    const [{ teamMembers }] = useGlobalState();
    const [{ playerTeam, playerName } ] = usePlayerState();

    let element = []

    return (
        <div id="profileSidebar" className="leftSidebar">
            < ProfileBar />
            < RelationshipSidebar />

        </div>
    )

}