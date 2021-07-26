import React from 'react';
import "./preloader.css";
const PreLoader = () => {
    return (
        <>
            <section className="preloader_container">
    <svg width="200" height="250" viewBox="0 0 50 50">
        <polygon stroke-width="1" stroke="#fff" fill="none"
        points="20,1 40,40 1,40"></polygon>
        <text fill="#fff" x="10" y="52">Loading</text>
    </svg>
</section>
        </>
    );
};

export default PreLoader;