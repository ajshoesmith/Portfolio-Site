import {thumbFireRC, thumbPortfolio, rcAnnotated001, rcCompetitionVid} from '../assets/images/imagesDatabase';
import {thumbMobileGame, prjGameCampDemo, prjGameInputBlueprint, prjGameInputDemo} from '../assets/images/imagesDatabase';
import SlideGallery from '../components/SlideGallery.js';

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
                    <h1 id="Title">{this.title}</h1>
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
                    "Legions" addresses the need for an engaging real-time strategy mobile game, which includes dozens of systems. A few select challenges include:
                    </p>
                    <ul>
                        <li>Networking for synchronous play.</li>
                        <li>Backend web server and database for user data management.</li>
                        <li>Intuitive input management for touch-screen users.</li>
                    </ul>
                     
                    <h2 id="Solution and Implementation">Solution and Implementation</h2>
                    <hr/>
                    <h3 id="Networking">Networking</h3>
                    <p>I implemented a dedicated server architecture using <strong>FishNet Networking</strong> for secure, synchronized multiplayer gameplay.
                    This approach minimizes latency and ensures secure, server-side game logic management.
                    <br/><br/>
                    To reduce client-side authority and minimize cheating, I used the <strong>Command Pattern</strong> on the server to handle received client commands. 
                    Only essential input commands (e.g., movement or attack orders) are transmitted to the server, 
                    which reduces the risk of cheating and ensures consistency across all clients. 
                    This server-side validation of commands also ensures that the game state remains synchronized, even in the event of network instability.</p>
                    <h3 id="Backend Web Server and Database">Backend Web Server and Database</h3>
                    <figure style={{marginBottom: '40px'}}>
                        <video src={prjGameCampDemo} 
                        width='100%' height='400px' controls>       
                        Your browser does not support the video tag.
                        </video>
                        <figcaption>Showcase of Web Server Utility in Base Scene</figcaption>
                    </figure>
                    <p> 
                    For server-side user data management, I implemented a backend
                    system using <strong>Apache</strong>, <strong>PHP</strong>, and <strong>MySQL</strong>.
                    Apache handles incoming HTTP requests, while PHP manages authentication, session handling, and database interactions.
                    <br/><br/>
                    The backend system ensures data integrity and security by storing user credentials, game progress, and other sensitive information in a <strong>MySQL database</strong>.
                    I employed parameterized queries to prevent SQL injection attacks and ensure safe database access.
                    User session verification is handled by PHP scripts, which manage user authentication and maintain secure session states across multiple requests.
                    <br/><br/>
                    To prevent cheating and unauthorized access, I implemented secure, server-side validation of all game-related data. 
                    For example, any sensitive operations, such as password changes, are processed server-side with data being hashed and salted prior to storage in database, 
                    ensuring that the client cannot manipulate or bypass important security checks.

                    </p>
                    <h3 id="Input System">Input System</h3>
                    <figure style={{marginBottom: '40px'}}>
                        <video src={prjGameInputDemo} 
                        width='100%' height='400px' controls>       
                        Your browser does not support the video tag.
                        </video>
                        <figcaption>Input System Demo</figcaption>
                    </figure>
                    <p>
                    I designed an intuitive touch-based control system for mobile users, adapting to different in-game contexts. 
                    Using the <strong>State Machine Pattern</strong>, the system dynamically adjusts input behavior based on the touched object 
                    (e.g., units, terrain, buildings) and the gesture type (e.g., tapping, holding, dragging).
                    </p>
                    <figure style={{marginTop: '50px'}}>
                        <img src={prjGameInputBlueprint}/>
                        Input System Schematic
                    </figure>
                    

                    <h2 id="Results">Results</h2>
                    <hr/>
                    <h3 id="Outcomes">Outcomes</h3>
                    <ul>
                        <li>Successfully implemented a networking framework for synchronous multiplayer battles.</li>
                        <li>Developed a backend web server and database to manage, store, and authenticate user data.</li>
                        <li>Created an intuitive control system for touch-screen users, allowing efficient unit management.</li>
                        <li>Received positive preliminary feedback from early testers on the game's mechanics and user interface.</li>
                    </ul>
                    <h3 id="Future Plans">Future Plans</h3>
                    <ul>
                        <li>Integrate behavioral AI to enemy units to provide content without the requirement of a second player.</li>
                        <li>Provide match rewards based upon progress and match performance.</li>
                        <li>Upgrade of control UI to provide real-time feedback and to provide further clarity.</li>
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
        images: [],

        Body() 
        {
            return (
                <div>
                    <h1 id="Title">{this.title}</h1>
                    <img src={this.image}/>
                    <p>
                    This project involved the design, fabrication, and testing of a remotely operated firefighting vehicle equipped with a pressurized water delivery system for a competitive scenario. Utilizing mechanical engineering principles such as pneumatics, fluid dynamics, and solid mechanics, the team created a functional system that efficiently transported and delivered water to a target at varying heights. Key engineering tasks included system integration, iterative design optimization, and performance testing, culminating in a successful prototype that secured 1st place in the competition.
                    </p>

                    <h2 id="Project Details">Project Details</h2>
                    <hr/>
                    <h3 id="Skills & Tools Used">Skills & Tools Used</h3>
                    <p>The frameworks, languages, and tools utilised are:</p>
                    <ul>
                        <li>SolidWorks (3D CAD Modeling & Simulation)</li>
                        <li>Pneumatic Systems Design and Integration</li>
                        <li>FMEA (Failure Mode & Effects Analysis)</li>
                        <li>Fluid Mechanics and Solid Mechanics</li>
                        <li>Engineering Documentation (Drawings & Technical Reports)</li>
                        <li>Project Management and Team Leadership</li>
                    </ul>
                    <h3 id="Role and Duration">Role and Duration</h3>
                    <p><strong>Project Duration</strong>: February 2023 – April 2023<br/>
                       <strong>Role</strong>: Project Lead – Design & Manufacturing of Water Transport and Delivery System</p>

                    <h2 id="Problem Statement">Problem Statement</h2>
                    <hr/>
                    <h3 id="Context">Context</h3>
                    <p>
                    This project aimed to design a remotely operated firefighting vehicle with a pressurized water delivery system, limited to 15 psi, to target fires at varying heights (250mm to 800mm). The system required precise control over water flow, nozzle angle, and height for accurate targeting, with a reservoir to efficiently store and transport water for consistent performance in the competition.
                    </p>
                    <h2 id="Solution and Implementation">Solution and Implementation</h2>
                    <hr/>
                    <h3 id="Fluid Delivery System">Fluid Delivery System</h3>
                    <p></p>
                    <ul>
                        <li>The water delivery system was designed with a 2L air vessel and 1L water vessel using sustainable/recycable materials, connected by a servo-controlled 90-degree valve and nozzle controlled by a radio transmitter.</li>
                        <li>Initial traditional nozzle designs failed to meet expectations, prompting a redesign based on research to create a more effective flat spray pattern.</li>
                        <li>The air vessel was upgraded to a 4L bottle to resolve pressure concerns outlined in <strong>FMEA</strong>, and a more durable nozzle holder was developed.</li>
                        <li>The system's mounting was finalized, securing both vessels to the chassis for stable operation, and further testing was conducted to finalize the nozzle design for fire extinguishing.</li>
                        <li><strong>MATLAB</strong> scripts were used to calculate and optimize the nozzle velocity and stream trajectory based on experimental data.</li>
                        <li><strong>SolidWorks</strong> was employed to model and simulate the fluid delivery system, aiding in design refinement and providing a visual to easily communicate component utility.</li>
                    </ul>
                    <figure>
                        <img src={rcAnnotated001}/>
                        Annotated Image of Fluid Delivery System
                    </figure>

                    <h2 id="Results">Results</h2>
                    <hr/>
                    <h3 id="Outcomes">Outcomes</h3>
                    <ul>
                        <li>The water delivery system performed without leaks, contributing to a 1st place finish in the competition.</li>
                        <li>The optimized nozzle design, coupled with precise control over water flow, enabled effective targeting of crown fires.</li>
                        <li>The system met all performance objectives, ensuring reliable operation under pressure and optimal water delivery.</li>
                    </ul>
                    <figure style={{marginBottom: '40px'}}>
                        <video src={rcCompetitionVid} 
                        width='100%' height='400px' controls>       
                        Your browser does not support the video tag.
                        </video>
                        <figcaption>Final Competition, Round 2</figcaption>
                    </figure>
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