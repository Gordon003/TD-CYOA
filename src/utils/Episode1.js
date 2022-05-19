let challengeEvent;
let allianceEvent;

const walkEvent = {
    header: "walk to dive challenge",
    title: "Walking to the dive challenge",
    story: [
        {
            text: [
                `After you been sorted in your team, you are now walking up the hill. Bored, you decided to talk with your team.`,
            ]
        },
        {
            text: [
                `But which one do you want to talk with?`,
            ]
        }
    ],
    endType: "teamInteraction",
};

const introEventResponse3 = {
    header: "Fiery user",
    title: "Fiery Response",
    story: [
        {
            text: [
                `Nice to meet you guys! I hope to have some good competition here to win!`,
                `After some intial gasps, other contestants are closely looking at you.`,
            ],
        },
        {
            char: ["Heather"],
            text: [
                `Now we talking!`
            ]
        },
        {
            text: [
                `Sound like Heather envy you....`
            ],
        }
    ],
    endType: 'nextEvent',
    nextEvent: walkEvent,
};

const introEventResponse2 = {
    header: "Fiery user",
    title: "Fiery Response",
    story: [
        {
            text: [
                `Nice to meet you guys! I hope to have some good competition here to win!`,
                `After some intial gasps, other contestants are closely looking at you.`,
            ],
        },
        {
            char: ["Heather"],
            text: [
                `Nice to know that there are some real competition!`
            ]
        },
        {
            text: [
                `Sound like Courtney approved your message.`
            ],
        }
    ],
    endType: 'nextEvent',
    nextEvent: walkEvent,
};

const introEventResponse1 = {
    header: "friendly user",
    title: "Competitive Respomnse!",
    story: [
        {
            text: [
                `Uh... hello!`,
                `After some silence, a loud scream is heard.`,
            ],
        },
        {
            char: [ "Katie", "Sadie" ],
            text: [
                `New BFFFF!!!`
            ]
        },
        {
            text: [
                `Suddenly, Katie and Sadie rushed toward and hugged with you.`,
                `While hugging, you tried your best to get out of it`,
            ],
        }
    ],
    endType: 'nextEvent',
    nextEvent: walkEvent,
};

const introEvent = {
    header: "introEvent",
    title: "Your Arrival to the island",
    story: [
        {
            text: [
                `You are the last contestant to arrived in the island.`,
                `Helped to the dock by Chris, you see some happy and unhappy feeling.`
            ]
        },
        {
            char: ["Chris"],
            text: [
                `Hey, campers! One last contestant to introduce to you guys! $playerName`,
            ]
        },
        {
            char: ["Chris"],
            text: [
                `Why not you introduce yourself to your fellow contestants?`,
            ],
        },
    ],
    endType: 'choice',
    options: [
        {
            text: `Here to make friends.`,
            nextEvent: introEventResponse1,
        },
        {
            text: `Hi. I'm here to compete`,
            nextEvent: introEventResponse2,
        },
        {
            text: `I'm gonna destroy all of you!`,
            nextEvent: introEventResponse3,
        },
    ],
}


// export const episode1Story = introduceEvent;
export default introEvent;
export {
    introEvent,
    walkEvent,
    challengeEvent,
    allianceEvent
}