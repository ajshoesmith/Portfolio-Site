import {thumbMobileGame, thumbFireRC, thumbPortfolio} from '../assets/images/imagesDatabase';

const projectsData= [
    /* 
    # Required Properties
        -image
        -title
        -slug or external link
        -tags[]
        -Body()
    */
    {
        title: 'Networked Real-Time Strategy Game',
        category: 'Game Development + Backend Web Development',
        image: thumbMobileGame,
        tags: ['C#', 'PHP','SQL','Unity'],
        slug: 'rts-game',

        Body() 
        {
            return (
                <div>
                    <h1>{this.title}</h1>
                    <img src={this.image}/>
                    <p>
                        "Legions" is a networked multiplayer real-time strategy game set during the end of the Roman Republic. Players act as commanders, managing resources and commanding armies in real-time battles. The game features a networking framework for synchronous battles, a backend web server for user data management, and an intuitive control system for unit management.
                    </p>

                    <h2 id="Project Details">Project Details</h2>
                    <hr/>
                    <h3 id="Technologies Used">Technologies Used</h3>
                    <p>The frameworks, languages, and tools utilised are:</p>
                    <ul>
                        <li>C#</li>
                        <li>PHP</li>
                        <li>SQL</li>
                        <li>Apache</li>
                        <li>Unity</li>
                        <li>FishNet Neworking</li>
                    </ul>
                    <h3 id="Role and Duration">Role and Duration</h3>
                    <p>Primary developer, responsible for all systems except the modified Fog of War. Development began in May 2023, with a playable demo expected by May 2025.</p>

                    <h2 id="Problem Statement">Problem Statement</h2>
                    <hr/>
                    <h3 id="Context">Context</h3>
                    <p>
                    "Legions" addresses the need for an engaging real-time strategy mobile game. A few select challenges include:
                    </p>
                    <ul>
                        <li>Networking for synchronous play.</li>
                        <li>Backend web server and database for user data management.</li>
                        <li>Intuitive input management for touch-screen users.</li>
                    </ul>
                     
                    <h2 id="Solution and Implementation">Solution and Implementation</h2>
                    <hr/>
                    <h3 id="Networking">Networking</h3>
                    <p>Utilized a dedicated server approach with <strong>FishNet Networking</strong> for secure and authenticated game management. Implemented the <strong>Command Pattern</strong> server-side with, limiting the client input data crossing the network to the server, minimizing client authority.</p>
                    <h3 id="Backend Web Server and Database">Backend Web Server and Database</h3>
                    <p>Used <strong>Apache</strong>, <strong>PHP</strong>, and <strong>MySQL</strong> to store user data server-side, preventing cheating. PHP scripts handle web requests, session verification, and database queries.</p>
                    <h3 id="Input System">Input System</h3>
                    <p>Intuitive input management for touch-screen users involves designing easy-to-use controls that allow complex orders, inspired by <a href='https://en.wikipedia.org/wiki/Wargame'>wargames</a>. Using the <strong>State Machine Pattern</strong>, input depends on the layer of the game object you are currently touching and the type of touch (e.g., tapping selects a unit, dragging on terrain sends commands).</p>

                    <h2 id="Results">Results</h2>
                    <hr/>
                    <h3 id="Outcomes">Outcomes</h3>
                    <ul>
                        <li>Successfully implemented a networking framework for synchronous multiplayer battles.</li>
                        <li>Developed a backend web server and database to manage, store, and authenticate user data.</li>
                        <li>Created an intuitive control system for touch-screen users, allowing efficient unit management.</li>
                        <li>Received positive preliminary feedback from early testers on the game's mechanics and user interface.</li>
                    </ul>
                </div>
            );
        }
    },
    {
        title: 'Remote Controlled Fire-Fighting Vehicle',
        category: 'Fluids + Mechanical Engineering',
        image: thumbFireRC,
        tags: ['SolidWorks', 'MATLAB', '3D Printing', 'Excel'],
        slug: 'rc-firetruck',

        Body() 
        {
            return (
                <div>
                    <h1>{this.title}</h1>
                    <h2>{this.category}</h2>
                    {this.tags.map(tag => ( <h3>{tag}</h3> ))}
                    <img src={this.image}/>
                </div>
            );
        }
    },
    {
        title: 'Portfolio React Site',
        category: 'Frontend Development',
        image: thumbPortfolio,
        tags: ['HTML', 'CSS', 'JavaScript', 'REACT'],
        externalLink: 'https://www.wikipedia.org/',
        slug:'portfolio-site',

        Body() 
        {
            return (
                <div>
                    <h1>{this.title}</h1>
                    <h2>{this.category}</h2>
                    {this.tags.map(tag => ( <h3>{tag}</h3> ))}
                    <img src={this.image}/>
                </div>
            );
        }
    }
]

export default projectsData;