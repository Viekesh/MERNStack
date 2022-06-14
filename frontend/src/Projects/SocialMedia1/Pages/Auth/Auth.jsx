import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch } from "react-redux";
import { logIn, signUp } from "../../Actions/AuthAction";



const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(true);
    // This means our isSignUp is false then we rendering our Login page

    const dispatch = useDispatch();

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        password: "",
        confirmpass: "",
        username: ""
    });
    // Now we have to write a function to handle the change in our inputs and put the value in our
    // inputs inside this object

    const [confmPass, setConfmPass] = useState(true);

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };
    // It will take event as a parameter as we know that all of our form is lies inside this form
    // And this form is submitted by clicking our last button, because this has the type submit

    // Our concern right now is input field, that how to reflect the change in our inputs to our
    // useState hook here, so we are writing a function handle change which is taking the evetn
    // as a parameter and we destructure our data

    // The reason why we are setting data like this is because if I don't use this convention then
    // we have to make handle change for every input separately
    // But by doing the event.target.name now we can use a single function for all of our inputs
    // So now in each input type onChange = (handleChange)

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isSignUp) {
            data.password === data.confirmpass ?
                dispatch(signUp(data)) :
                setConfmPass(false)
        } else {
            dispatch(logIn(data));
        }
    }

    const resetForm = () => {
        setConfmPass(true);
        setData({
            firstname: "",
            lastname: "",
            password: "",
            confirmpass: "",
            username: ""
        });
    };

    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>Fill Your Details Here</h1>
                    <h6>Explore the ideas throughout the wor</h6>
                </div>
            </div>

            {/* <SignUp /> */}
            <div className="a-right">
                <form className="infoForm authForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

                    {isSignUp && (
                        <div>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="infoInput"
                                name="firstname"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="infoInput"
                                name="lastname"
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <div>
                        <input
                            type="text"
                            className="infoInput"
                            name="username"
                            placeholder="Username"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            className="infoInput"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                        />

                        {isSignUp && (
                            <input
                                type="password"
                                className="infoInput"
                                placeholder="Confirm Password"
                                name="confirmpass"
                                onChange={handleChange}
                                value={data.confirmPass}
                            />
                        )}
                    </div>

                    <span style={{
                        display: confmPass ? "none" : "block",
                        color: "red",
                        fontSize: "12px",
                        fontWeight: "bold",
                        alignSelf: "center"
                    }}>
                        Confirm Password Is Not Same
                    </span>

                    <div>
                        <span
                            style={{ fontSize: '12px', cursor: "pointer" }}
                            onClick={() => { setIsSignUp((prev) => !prev); resetForm() }}
                        >
                            {isSignUp ? "Already have an account. Login!" : "Don't have an account! SignUp"}
                        </span>
                    </div>
                    <button className="button infoButton" type="submit">
                        {isSignUp ? "SignUp" : "LogIn"}
                    </button>
                </form>
            </div>
        </div>
    );
};


export default Auth;