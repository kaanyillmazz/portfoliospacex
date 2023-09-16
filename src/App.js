import {useNavigate} from 'react-router-dom';
import {Button} from "@mui/joy";
import {useEffect, useState} from "react";


function App() {

    const navigate = useNavigate();

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


    return (


        <div className="Main">
            <div id="profilePic" className="profilePic displayNone">
                <img className="profilePic" src="https://i.imgur.com/aOmiDeB.png" alt="user profile"/>
            </div>

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
                    <img className="moon-images" onClick={() => {
                        handleAboutMe();
                    }}  src="https://i.imgur.com/Uszv7iL.png" alt="moon"/>
                </div>
                <label className="moon1-header">About Me</label>
            </div>

            <div id="moon2-container" className="moon2-container transition">
                <div id="moon2" className="moon2 transition">
                    <img className="moon-images" src="https://i.imgur.com/yG4MuDC.png" alt="moon"/>
                </div>
                <label className="moon2-header">Miscellaneous</label>
            </div>

            <div id="moon3-container" className="moon3-container transition">
                <div id="moon3" className="moon3 transition">
                    <img  className="moon-images" onClick={() => {
                        window.open("https://drive.google.com/file/d/14yqH8EIEAFAlhCS4bJJA17P_R5xm_bth/view?usp=sharing")
                    }}  src="https://i.imgur.com/nf18N0a.png" alt="moon"/>
                </div>
                <label className="moon3-header">Resume</label>
            </div>


            <div id="moon4-container" className="moon4-container transition">
                <div id="moon4" className="moon4 transition">
                    <img className="moon-images" onClick={() => {
                        handleContactMe();
                    }}  src="https://i.imgur.com/wu0fra2.png" alt="moon"/>
                </div>
                <label className="moon4-header">Contact Me</label>
            </div>

        </div>

    );
}

export default App;
