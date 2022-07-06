import React from 'react';
import "./Footer.css"
import { VscCallIncoming, VscBriefcase, VscGithubInverted, VscPlayCircle, VscTwitter, VscGlobe } from "react-icons/vsc";
const Footer = () => {
    return (
        <div style={{
            backgroundColor: "#27282B"
        }} className="footer mx-auto max-w-screen h-screen absolute  mt-28">
            <div className="logo grid gird grid-cols-1">
                <h1 className="logo-name">Logo</h1>
                <p className="logo-title">We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                <div className="flex flex-cols-1">
                    <div className="flex items-center">
                        <div>
                            <p className="call text-white"><VscCallIncoming /> </p>
                        </div>
                        <div>
                            <p className="caption px-1">Have a question?</p>
                            <p className="caption px-1">310-437-2766</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <p className="caption-2 text-white px-1"><VscBriefcase /></p>
                        </div>
                        <div>
                            <p className="caption px-2">Contact us at</p>
                            <p className="caption px-2">unreal@outlook.com</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="news grid grid-cols-1">
                <h1 className="logo-name">Newsletter</h1>
                <p className="logo-title">Be the first one to know about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.</p>
                <div className="">
                    <div class="form-control">
                        <div class="input-group w-24 h-24">
                            <input className="text-white" type="text" placeholder="Enter your Email" class="input input-bordered " />
                            <button class="btn">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className="steps text-white">
                <div className="menu-bar">
                    <p>About us</p>
                    <p>Jobs</p>
                    <p>Blog</p>
                    <p>Press</p>
                    <p>FAQ</p>
                    <p>Careers</p>
                    <p>Contact</p>
                    <p>Privacy policy</p>
                    <p>Sitemap</p>
                    <p>Terms of Use</p>
                </div>
                <div className="button-bar">
                    <div className="socail text-3xl m-6 ">
                        <p><VscGithubInverted /></p>
                        <p><VscPlayCircle /></p>
                        <p><VscTwitter /></p>
                        <p><VscGlobe /></p>
                    </div>
                    <div>
                        <p>© 2000-2022, All Rights Reserved</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;