import React from 'react';

const Skills = () => {
    return (
    <div className="container skills">
        <div className="row">
            <div className="col-12">
                <h2>Over 1600 skills and growing</h2>
            </div>
            <div className="col-md-2 col-6">
                <img src="mobile.svg" />
                <h3>Mobile & Web</h3>
                <hr />
                <div className="link">
                    <a href="#">Shopify</a>
                    <a href="#">WordPress</a>
                    <a href="#">JavaScript</a>
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">Website Design</a>
                    <a href="#">Squarespace</a>
                    <a href="#">Mobile App Development</a>
                </div>
            </div>
            <div className="col-md-2 col-6">
                <img src="development.svg" />
                <h3>Development</h3>
                <hr />
                <div className="link">
                    <a href="#">Roblox</a>
                    <a href="#">CMS</a>
                    <a href="#">Java</a>
                    <a href="#">Python</a>
                    <a href="#">Architecture</a>
                    <a href="#">PHP</a>
                    <a href="#">MySQL</a>
                    <a href="#">.Net</a>
                </div>
            </div>
            <div className="col-md-2 col-6 d-md-block d-none">
                <img src="internet.svg" />
                <h3>Internet</h3>
                <hr />
                <div className="link">
                    <a href="#">AWS</a>
                    <a href="#">SEO</a>
                    <a href="#">Linux</a>
                    <a href="#">Social Media</a>
                    <a href="#">Analytics</a>
                    <a href="#">API</a>
                    <a href="#">Google Tag Management</a>
                    <a href="#">YouTube</a>
                </div>
            </div>
            <div className="col-md-2 col-6 d-md-block d-none">
                <img src="design.svg" />
                <h3>Motion & Design</h3>
                <hr />
                <div className="link">
                    <a href="#">Photoshop</a>
                    <a href="#">Graphic Design</a>
                    <a href="#">illustration</a>
                    <a href="#">Logo Design</a>
                    <a href="#">3D Modelling</a>
                    <a href="#">UX/UI Design</a>
                    <a href="#">Animation</a>
                    <a href="#">CGi</a>
                </div>
            </div>
            <div className="col-md-2 col-6 d-md-block d-none">
                <img src="backoffice.svg" />
                <h3>Backoffice</h3>
                <hr />
                <div className="link">
                    <a href="#">Finance</a>
                    <a href="#">Excel</a>
                    <a href="#">Accounting</a>
                    <a href="#">Logistics</a>
                    <a href="#">Manufacturing</a>
                    <a href="#">Research</a>
                    <a href="#">Legal</a>
                    <a href="#">Data Entry</a>
                </div>
            </div>
            <div className="col-md-2 col-6 d-md-block d-none">
                <img src="content.svg" />
                <h3>Content</h3>
                <hr />
                <div className="link">
                    <a href="#">Translation</a>
                    <a href="#">Marketing</a>
                    <a href="#">Blog</a>
                    <a href="#">Copywriting</a>
                    <a href="#">Proofreading</a>
                    <a href="#">Technical Writing</a>
                    <a href="#">Communications</a>
                    <a href="#">Creative Writing</a>
                </div>
            </div>
            <div className="col-12 text-center btn">
                <a href="#">View All</a>
            </div>
        </div>
    </div>
    )
}


export default Skills;