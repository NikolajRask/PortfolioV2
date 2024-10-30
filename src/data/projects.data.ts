interface ProjectType {
    name: string;
    url: string;
    domainExtension: string;
    imageSrc: string;
    description: string;
    includeDomainExtension?: boolean;
}

const projects:ProjectType[] = [
    {
        name: "Spaak",
        url: "https://spaak.ai",
        domainExtension: "ai",
        imageSrc: './spaak.png',
        description: "I have been working on the Spaak team helping develop the software Hamilton for lobbyists."
    },
    {
        name: "NoteLed",
        url: "https://github.com/NikolajRask/note-app",
        domainExtension: "com",
        includeDomainExtension: false,
        imageSrc: './noteled.png',
        description: "NoteLed is a work in progress open-source note taking app. This is a desktop app for taking notes that i sometimes update. NoteLed is created with ElectronJS and JavaScript."
    },
    {
        name: "nkjrask",
        url: "https://nkjrask.com",
        domainExtension: "com",
        includeDomainExtension: true,
        imageSrc: './nkjrask.png',
        description: "This is the website that you are currently on right now. This is my portfolio website where I showcase my projects and where I make it easy to connect with me on different platforms."
    }
]

export default projects