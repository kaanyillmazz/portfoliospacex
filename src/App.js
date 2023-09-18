import {Button} from "@mui/joy";


function App() {

    function handleAboutMe() {
        document.getElementById("moon1").classList.remove("moon1");
        document.getElementById("moon1").classList.add("moon1-displacement");
        document.getElementById("moon1").classList.add("animate-spin");
        document.getElementById("moon1-container").classList.add("moon1-displacement");

        document.getElementById("moon2").classList.remove("moon2");
        document.getElementById("moon2").classList.add("moon2-displacement");
        document.getElementById("moon2").classList.add("animate-spin");
        document.getElementById("moon2-container").classList.add("moon2-displacement");

        document.getElementById("moon3").classList.remove("moon3");
        document.getElementById("moon3").classList.add("moon3-displacement");
        document.getElementById("moon3").classList.add("animate-spin");
        document.getElementById("moon3-container").classList.add("moon3-displacement");

        document.getElementById("moon4").classList.remove("moon4");
        document.getElementById("moon4").classList.add("moon4-displacement");
        document.getElementById("moon4").classList.add("animate-spin");
        document.getElementById("moon4-container").classList.add("moon4-displacement");

        document.getElementById("about-me-body").classList.add("animate-fadein");
        document.getElementById("about-me-body").classList.remove("displayNone");
        document.getElementById("about-me-body").classList.add("displayBlock");

        document.getElementById("profilePic").classList.add("animate-fadein");
        document.getElementById("profilePic").classList.remove("displayNone");
        document.getElementById("profilePic").classList.add("displayBlock");

        document.getElementById("kaanyilmaz").classList.add("opacityZero");

        document.getElementById("contactsHolder").classList.add("opacityZero");

    }


    function handleContactMe() {
        document.getElementById("moon1").classList.remove("moon1");
        document.getElementById("moon1").classList.add("moon1-displacement");
        document.getElementById("moon1").classList.add("animate-spin");
        document.getElementById("moon1-container").classList.add("moon1-displacement");

        document.getElementById("moon2").classList.remove("moon2");
        document.getElementById("moon2").classList.add("moon2-displacement");
        document.getElementById("moon2").classList.add("animate-spin");
        document.getElementById("moon2-container").classList.add("moon2-displacement");

        document.getElementById("moon3").classList.remove("moon3");
        document.getElementById("moon3").classList.add("moon3-displacement");
        document.getElementById("moon3").classList.add("animate-spin");
        document.getElementById("moon3-container").classList.add("moon3-displacement");

        document.getElementById("moon4").classList.remove("moon4");
        document.getElementById("moon4").classList.add("moon4-displacement");
        document.getElementById("moon4").classList.add("animate-spin");
        document.getElementById("moon4-container").classList.add("moon4-displacement");

        document.getElementById("about-me-body").classList.add("animate-fadein");
        document.getElementById("about-me-body").classList.remove("displayBlock");
        document.getElementById("about-me-body").classList.add("displayNone");

        document.getElementById("profilePic").classList.add("animate-fadein");
        document.getElementById("profilePic").classList.remove("displayBlock");
        document.getElementById("profilePic").classList.add("displayNone");

        document.getElementById("kaanyilmaz").classList.remove("opacityZero");

        document.getElementById("contactsHolder").classList.remove("opacityZero");


    }

    function AboutMeStarHover() {

        window.requestAnimationFrame(function () {

            document.getElementById("fallingstar10").setAttribute("style", "top: 18%; right: 78%;rotate: 45deg");
            document.getElementById("fallingstar11").setAttribute("style", "top: 4%; right: 86%;rotate: -45deg");
            document.getElementById("fallingstar4").setAttribute("style", "top: 18%; right: 94%;rotate: -135deg");
            document.getElementById("fallingstar10").setAttribute("src", " https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif");
            document.getElementById("fallingstar11").setAttribute("src", " https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif");
            document.getElementById("fallingstar4").setAttribute("src", " https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif");


        });
    }

    function ResumeStarHover() {

        window.requestAnimationFrame(function () {

            document.getElementById("fallingstar12").setAttribute("style", "top: 68%; right: 66%;rotate: 45deg");
            document.getElementById("fallingstar13").setAttribute("style", "top: 54%; right: 74%;rotate: -45deg");
            document.getElementById("fallingstar16").setAttribute("style", "top: 68%; right: 82%;rotate: -135deg");
            document.getElementById("fallingstar4").setAttribute("style", "display: none");
            document.getElementById("fallingstar12").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif");
            document.getElementById("fallingstar13").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif");
            document.getElementById("fallingstar16").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif");
        });
    }


    function ContactMeStarHover() {

        window.requestAnimationFrame(function () {

            document.getElementById("fallingstar17").setAttribute("style", "top: 78%; right: 22%;rotate: 45deg");
            document.getElementById("fallingstar6").setAttribute("style", "top: 63%; right: 30%;rotate: -45deg");
            document.getElementById("fallingstar2").setAttribute("style", "top: 78%; right: 38%;rotate: -135deg");
            document.getElementById("fallingstar7").setAttribute("style", "display: none");
            document.getElementById("fallingstar17").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif");
            document.getElementById("fallingstar6").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif");
            document.getElementById("fallingstar2").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif");
        });
    }

    function ContactMeStarLeave() {

        window.requestAnimationFrame(function () {

            document.getElementById("fallingstar17").setAttribute("style", "top: 90%; right: 5%;rotate: 0deg");
            document.getElementById("fallingstar6").setAttribute("style", "top: 48%; right: 40%;rotate: 0deg");
            document.getElementById("fallingstar2").setAttribute("style", "top: 80%; right: 48%;rotate: 0deg");
            document.getElementById("fallingstar7").setAttribute("style", "display: block");
            document.getElementById("fallingstar17").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-200-t.gif");
            document.getElementById("fallingstar6").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-300-t.gif");
            document.getElementById("fallingstar2").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-100-t.gif");
        });
    }

    function MiscStarHover() {

        window.requestAnimationFrame(function () {

            document.getElementById("fallingstar18").setAttribute("style", "top: 28%; right: 0%;rotate: 45deg");
            document.getElementById("fallingstar14").setAttribute("style", "top: 14%; right: 7%;rotate: -45deg");
            document.getElementById("fallingstar1").setAttribute("style", "top: 28%; right: 15%;rotate: -135deg");
            document.getElementById("fallingstar18").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif");
            document.getElementById("fallingstar14").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif");
            document.getElementById("fallingstar1").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif");

        });
    }

    function MiscStarLeave() {

        window.requestAnimationFrame(function () {

            document.getElementById("fallingstar18").setAttribute("style", "top: 50%; right: 15%;rotate: 0deg");
            document.getElementById("fallingstar14").setAttribute("style", "top: 15%; right: 15%;rotate: 0deg");
            document.getElementById("fallingstar1").setAttribute("style", "top: 5%; right: 20%;rotate: 0deg");
            document.getElementById("fallingstar18").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-400-t.gif");
            document.getElementById("fallingstar14").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-300-t.gif");
            document.getElementById("fallingstar1").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-200-t.gif");

        });
    }


    function AboutMeStarLeave() {
        window.requestAnimationFrame(function () {
                document.getElementById("fallingstar10").setAttribute("style", "top: 0%; right: 48%; rotate: 0deg");
                document.getElementById("fallingstar11").setAttribute("style", "top: 13%; right: 90%;rotate: 0deg");
                document.getElementById("fallingstar4").setAttribute("style", "top: 70%; right: 80%;rotate: 0deg");
                document.getElementById("fallingstar10").setAttribute("src", " https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-200-t.gif");
                document.getElementById("fallingstar11").setAttribute("src", " https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-100-t.gif");
                document.getElementById("fallingstar4").setAttribute("src", " https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-300-t.gif");


            }
        );
    }

    function ResumeStarLeave() {

        window.requestAnimationFrame(function () {

            document.getElementById("fallingstar12").setAttribute("style", "top: 78%; right: 61%;rotate: 0deg");
            document.getElementById("fallingstar13").setAttribute("style", "top: 31%; right: 69%;rotate: 0deg");
            document.getElementById("fallingstar16").setAttribute("style", "top: 70%; right: 90%;rotate: 0deg");
            document.getElementById("fallingstar4").setAttribute("style", "display: block");
            document.getElementById("fallingstar12").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-100-t.gif");
            document.getElementById("fallingstar13").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-200-t.gif");
            document.getElementById("fallingstar16").setAttribute("src", "https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-300-t.gif");


        });
    }


    return (


        <div className="Main">
            <div id="profilePic" className="profilePic displayNone">
                <img className="profilePic" src="https://i.imgur.com/aOmiDeB.png" alt="user profile"/>
            </div>

            <img id="fallingstar1" className="fallingstar1 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif"
                 alt="star"/>

            <img id="fallingstar2" className="fallingstar2 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-450-t.gif"
                 alt="star"/>

            <img id="fallingstar3" className="fallingstar3 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-200-t.gif"
                 alt="star"/>

            <img id="fallingstar4" className="fallingstar4 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-100-t.gif"
                 alt="star"/>

            <img id="fallingstar5" className="fallingstar5 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-400-t.gif"
                 alt="star"/>

            <img id="fallingstar6" className="fallingstar6 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-450-t.gif"
                 alt="star"/>

            <img id="fallingstar7" className="fallingstar7 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-550-t.gif"
                 alt="star"/>

            <img id="fallingstar8" className="fallingstar8 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-650-t.gif"
                 alt="star"/>

            <img id="fallingstar9" className="fallingstar9 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-750-t.gif"
                 alt="star"/>

            <img id="fallingstar10" className="fallingstar10 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-100-t.gif"
                 alt="star"/>

            <img id="fallingstar11" className="fallingstar11 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-100-t.gif"
                 alt="star"/>

            <img id="fallingstar12" className="fallingstar12 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-300-t.gif"
                 alt="star"/>

            <img id="fallingstar13" className="fallingstar13 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-300-t.gif"
                 alt="star"/>

            <img id="fallingstar14" className="fallingstar14 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif"
                 alt="star"/>

            <img id="fallingstar15" className="fallingstar15 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-450-t.gif"
                 alt="star"/>

            <img id="fallingstar16" className="fallingstar16 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-300-t.gif"
                 alt="star"/>

            <img id="fallingstar17" className="fallingstar17 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-450-t.gif"
                 alt="star"/>

            <img id="fallingstar18" className="fallingstar18 transition3"
                 src="https://raw.githubusercontent.com/kaanyillmazz/portfoliospacex/master/assets/images/starfall-t.gif"
                 alt="star"/>


            <div id="contactsHolder" className="contactsHolder opacityZero transition">
                <div className="socialButtons">
                    <Button
                        color="danger"
                        disabled={false}
                        sx={{
                            color: "#F09898", backgroundColor: "transparent", ':hover': {
                                backgroundColor: '#430A0A',
                                color: 'white',
                            },
                        }}
                        onClick={function () {
                        }}
                        size="md"
                        variant="plain"
                        startDecorator={<img style={{width: 15, height: 15}}
                                             src="https://www.unipile.com/wp-content/uploads/2022/09/logo_instagram.png"
                                             alt="user"/>}
                    >Instagram</Button>


                    <Button
                        color="danger"
                        sx={{
                            color: "#F09898", backgroundColor: "transparent", ':hover': {
                                backgroundColor: '#430A0A',
                                color: 'white',
                            },
                        }}
                        disabled={false}
                        onClick={function () {
                            window.open("https://www.linkedin.com/in/kaanyillmazz/", "_blank");
                        }}
                        size="md"
                        variant="plain"
                        startDecorator={<img style={{width: 15, height: 15}}
                                             src="https://www.unipile.com/wp-content/uploads/2022/09/logo-linkedin-1.png"
                                             alt="user"/>}
                    >LinkedIn</Button>

                    <Button
                        color="danger"
                        sx={{
                            color: "#F09898", backgroundColor: "transparent", ':hover': {
                                backgroundColor: '#430A0A',
                                color: 'white',
                            },
                        }}
                        disabled={false}
                        onClick={function () {
                            window.open("https://github.com/kaanyillmazz", "_blank");
                        }}
                        size="md"
                        variant="plain"

                        startDecorator={<img style={{width: 15, height: 15}}
                                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                                             alt="user"/>}
                    >Github</Button>

                </div>


            </div>


            <div id="kaanyilmaz" className="kaanyilmaz transition">
                <label className="kaanyilmaz">Kaan YILMAZ</label>

            </div>

            <div className="starsBackground">

            </div>


            <div className="row">

                <div className="col-md-12">
                    <label id="about-me-body" className="about-me-body displayNone transition">
                        I have studied computer science at Ozyegin University. <br/> The technologies
                        I am familiar with are Java, C, C++, C#, ASP.NET, Spring Boot, Verilog, <br/>
                        React, Angular, Javascript, Bootstrap, Redux, MaterialUI, Node.js <br/> I am very
                        interested in learning new technologies, ask me anything :)
                        <br/>
                        I'm currently working on CTRL+ Future Bootcamp.
                        <br/>
                        You can reach me from my linkedin profile.</label>


                </div>
            </div>


            <div id="moon1-container" className="moon1-container transition">
                <div id="moon1" className="moon1 transition">
                    <img className="moon-images" onMouseOver={() => {
                        AboutMeStarHover();
                    }} onMouseLeave={() => {
                        AboutMeStarLeave();
                    }} onClick={() => {
                        handleAboutMe();
                    }} src="https://i.imgur.com/Uszv7iL.png" alt="moon"/>
                </div>
                <label className="moon1-header">About Me</label>
            </div>

            <div id="moon2-container" className="moon2-container transition">
                <div id="moon2" className="moon2 transition">
                    <img className="moon-images" onMouseOver={() => {
                        MiscStarHover();
                    }} onMouseLeave={() => {
                        MiscStarLeave();
                    }} src="https://i.imgur.com/yG4MuDC.png" alt="moon"/>
                </div>
                <label className="moon2-header">Miscellaneous</label>
            </div>

            <div id="moon3-container" className="moon3-container transition">
                <div id="moon3" className="moon3 transition">
                    <img className="moon-images" onMouseOver={() => {
                        ResumeStarHover();
                    }} onMouseLeave={() => {
                        ResumeStarLeave();
                    }} onClick={() => {
                        window.open("https://drive.google.com/file/d/14yqH8EIEAFAlhCS4bJJA17P_R5xm_bth/view?usp=sharing")
                    }} src="https://i.imgur.com/nf18N0a.png" alt="moon"/>
                </div>
                <label className="moon3-header">Resume</label>
            </div>


            <div id="moon4-container" className="moon4-container transition">
                <div id="moon4" className="moon4 transition">
                    <img className="moon-images" onMouseOver={() => {
                        ContactMeStarHover();
                    }} onMouseLeave={() => {
                        ContactMeStarLeave();
                    }} onClick={() => {
                        handleContactMe();
                    }} src="https://i.imgur.com/wu0fra2.png" alt="moon"/>
                </div>
                <label className="moon4-header">Contact Me</label>
            </div>

        </div>

    );
}

export default App;
