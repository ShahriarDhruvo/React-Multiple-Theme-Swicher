import React from "react";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import emoji from "react-easy-emoji";

const Home = () => {
    return (
        <div className="vertical-center text-center mx-2">
            <div className="container content-box mx-auto p-5">
                <ThemeSwitcher />

                <h3>Multiple theme switcher {emoji("😉")}</h3>
                <small>Built using (ReactJS, SCSS/CSS, Local Storage)</small>
                <h5>
                    Select multiple themes from top circle buttons and change to
                    your favourite theme. To add your cutom theme to your
                    collection follow these steps:
                </h5>
                <p>
                    1.Go to the "ThemeSwitcher.jsx" file and copy paste a div
                    with id="theme-xxx"
                    <br />
                    2.Go to the "_theme-options.scss" file and copy paste a
                    "#theme-xxx"
                    <br />
                    3.Add your custom theme color file into "styles/themes/colors"
                    dir (Follow the rules of previous color files)
                    <br />
                    And you are good to go {emoji("😁")}
                </p>
            </div>
        </div>
    );
};

export default Home;
