let introduceEvent;
let introduceEventOpt1, introduceEventOpt2, introduceEventOpt3;
let startHillEvent, startHillReaction;

startHillReaction = {
    'Noah': [
        {
            header: "Your Arrival",
            text: [
                "Hello, Noah!"
            ],
            type: "story"
        }
    ],

}
startHillEvent = [
    {
        header: "Walking to the hill",
        text: [
            `After you been sorted in your team, you are now walking up the hill. Bored, you decided to talk with your team.`,
            `But which one do you want to talk with?`
        ],
        type: "team member choice",
        reaction: startHillReaction
    },
]



introduceEventOpt1 = [
    {
        header: "Reaction",
        text: [
            `After some silence, a loud scream is heard. "Oh that's sweet! Nice to meet you too!"`,
            `Suddenly, Katie and Sadie rushed toward and hugged with you.`,
            `New BFFFF!!! Both screamed as you tried to get out of it.`
        ],
        type: "story",
        nextEvent: startHillEvent
    },
]

introduceEventOpt2 = [
    {
        header: "Reaction",
        text: [
            `After some intial silence, a voice is heard. "Nice to know there are some real competition.`,
            `It was Courtney. She looks like she approved your introduction`
        ],
        type: "story",
        nextEvent: startHillEvent
    },
]

introduceEventOpt3 = [
    {
        header: "Intro",
        text: [
            `After some intial gasps, other contestants are closely looking at you.`,
            `You notice Heather not only looking but also grinning about it... for some reason.`
        ],
        type: "story",
        nextEvent: startHillEvent
    },
]

introduceEvent = [
    {
        header: "Your Arrival",
        text: [
            "You are the last contestant to arrived in the island. Helped to the dock by Chris, you see some happy and unhappy feeling."
        ],
        type: "story"
    },
    {
        header: "Introduce yourself",
        text: [
            "'Hey, campers! One last contestant to introduce to you guys!' Why not you introduce yourself to your fellow contestants?",
            " What do you want to say? "
        ],
        type: "choice",
        options: [
            `Nice to meet you guys. I'm here to enjoy and make friendship.`,
            `Hi. I'm here to compete`,
            `I'm gonna destroy all of you!`
        ],
        optionsResult: [introduceEventOpt1, introduceEventOpt2, introduceEventOpt3]
    },
]

// export const episode1Story = introduceEvent;
export const episode1Story = startHillEvent;