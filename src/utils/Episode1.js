let introduceEvent;
let introduceEventOpt1, introduceEventOpt2, introduceEventOpt3;
let startHillEvent, startHillReaction;
let hillEvent;
let hillEventOpt1, hillEventOpt2, hillEventOpt3

hillEventOpt1 = [
    {
        header: "Intro",
        text: [
            `After some intial gasps, other contestants are closely looking at you.`,
            `You notice Heather not only looking but also grinning about it... for some reason.`
        ],
        type: "story",
    },
]

hillEventOpt2 = [
    {
        header: "Intro",
        text: [
            `After some intial gasps, other contestants are closely looking at you.`,
            `You notice Heather not only looking but also grinning about it... for some reason.`
        ],
        type: "story",
    },
]

hillEventOpt3 = [
    {
        header: "Intro",
        text: [
            `Cody screams in horror, and then promptly pees his pants. Reluctantly, you lift him up on your shoulders and try to take him into the safe zone, until your savior arrives. A beautiful savior: Justin.`,
            `Justin's beauty distracts the sharks, and with his muscular arms, he carries you and Cody to safety on the shore while the sharks carry him..`
        ],
        type: "story",
    },
    {
        header: "Intro",
        text: [
            `"Th-thanks!", Cody says, nervously. His hands were shaking.`,
            `"No problem", you reply.`
        ],
        type: "story",
    },
]

hillEvent = [
    {
        header: "Your Arrival",
        text: [
            `For the rest of the way up, you and Noah have a pleasant conversation about your favourite books. Finally, everyone reaches the top of the cliff. Chris explains the challenge to everyone, and then you jump.`,
            `BUT, there are SHARKS! You didn't land in the Safe Zone. However, Cody just jumped and he's right next to you - what do you do?`

        ],
        type: "choice",
        options: [
            `Push Cody in front of you and swim away`,
            `Take your chances with the shark`,
            `Help Cody escape with you`
        ],
        optionsResult: [hillEventOpt1, hillEventOpt2, hillEventOpt3]
    }
]

startHillReaction = {
    'Noah': [
        {
            header: "Your Arrival",
            text: [
                `"Umm...hi!", You say to Noah.He looks short, but intimidating - like he could crush you to death with words.`,
                `"Hello", he replies back.`

            ],
            type: "story"
        },
        {
            header: "Your Arrival",
            text: [
                `"So, um, crazy challenge huh? Going up a cliff?", You ask him, wanting to start a conversation.`,
                `"I guess so.", he replies bluntly.`,
                `"You don't talk much, do you?"`,
                `"It's a personality trait."`

            ],
            type: "story",
            nextEvent: hillEvent
        },
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