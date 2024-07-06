import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
    const userName = import.meta.env.VITE_GITHUB_USER_NAME

    const [image, setImage] = useState('')

    const getGithubUser = async () => {
        const response = await axios.get(`https://api.github.com/users/${userName}`)
        setImage(response.data.avatar_url)
    }

    useEffect(() => {
        getGithubUser()
    }, [])

    const navigate = useNavigate()
    return (
        <div className="navbar">
            <img onClick={() => navigate('/')} className="logo" src={assets.logo} alt="logo" />
            <img className="profile" src={image} alt="profile-image" />
        </div>
    );
};

export default Navbar;
