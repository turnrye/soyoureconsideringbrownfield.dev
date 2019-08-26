const data = [
    {
        prompt: "What kind of developers are on your team?",
        answers: [
            {
                score: -1,
                text: "Android master race"
            },
            {
                score: -1,
                text: "What even is there besides iOS?"
            },
            {
                score: 0,
                text: "App developers, whatever tech necessary"
            }
        ]
    },
    {
        prompt: "Are you allowed to use JavaScript?",
        answers: [
            {
                score: -1,
                text: "Ivory tower hasn't blessed it yet"
            },
            {
                score: 0,
                text: "Of course"
            },
            {
                score: 0,
                text: "I don't take orders from nobody"
            }
        ]
    },
    {
        prompt: "Are your product folks on board?",
        answers: [
            {
                score: -1,
                text: "They don't really know"
            },
            {
                score: 0,
                text: "What does that even mean"
            },
            {
                score: 0,
                text: "Yeah!"
            }
        ]
    },
    {
        prompt: "What about sharing components with friends",
        answers: [
            {
                score: 0,
                text: "What friends"
            },
            {
                score: 1,
                text: "Maybe in the future"
            },
            {
                score: 2,
                text: "Others made 'em, we're gunna use 'em"
            }
        ]
    },
    {
        prompt: "What about your design people",
        answers: [
            {
                score: 0,
                text: "Hey thats me!"
            },
            {
                score: 1,
                text: "They want us on React"
            },
            {
                score: 0,
                text: "They don't really care"
            }
        ]
    },
    {
        prompt: "Would you share build and deploy tools?",
        answers: [
            {
                score: 0,
                text: "Not really"
            },
            {
                score: -1,
                text: "We'll have to make some ourselves"
            },
            {
                score: 1,
                text: "We get to use some off-the-shelf stuff"
            }
        ]
    },
    {
        prompt: "How far do you want to go in your transformation",
        answers: [
            {
                score: 0,
                text: "Just a few components"
            },
            {
                score: 1,
                text: "We'll put a few screens in as modals"
            },
            {
                score: 2,
                text: "We're thinking about entire features"
            }
        ]
    },
    {
        prompt: "What about sharing data between your new stuff and native",
        answers: [
            {
                score: 1,
                text: "Nothing to share"
            },
            {
                score: 0,
                text: "We need data from native to React Native"
            },
            {
                score: -1,
                text: "Our data is pretty intertwined"
            }
        ]
    },
    {
        prompt: "How are your current features?",
        answers: [
            {
                score: 0,
                text: "We're going to rethink them"
            },
            {
                score: 0,
                text: "They're OK"
            },
            {
                score: 1,
                text: "We want to add more"
            }
        ]
    },
    {
        prompt: "What about your existing native platform architecture/infrastructure?",
        answers: [
            {
                score: 0,
                text: "Works well and is easy to understand"
            },
            {
                score: 0,
                text: "It's getting us by"
            },
            {
                score: -1,
                text: "Burn it down"
            }
        ]
    }
];

export default data;