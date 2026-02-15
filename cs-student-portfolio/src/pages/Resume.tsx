import React from 'react';

const Resume: React.FC = () => {
    return (
        <div className="resume">
            <h1>John Doe's Resume</h1>
            <section>
                <h2>Contact Information</h2>
                <p>Email: johndoe@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>LinkedIn: linkedin.com/in/johndoe</p>
            </section>
            <section>
                <h2>Education</h2>
                <p>Bachelor of Science in Computer Science</p>
                <p>University of Example, 2020 - 2024</p>
            </section>
            <section>
                <h2>Experience</h2>
                <h3>Software Intern</h3>
                <p>Example Company, Summer 2023</p>
                <ul>
                    <li>Developed web applications using React and Node.js.</li>
                    <li>Collaborated with cross-functional teams to enhance user experience.</li>
                </ul>
            </section>
            <section>
                <h2>Skills</h2>
                <ul>
                    <li>Programming Languages: JavaScript, TypeScript, Python</li>
                    <li>Frameworks: React, Node.js, Express</li>
                    <li>Tools: Git, Docker, VS Code</li>
                </ul>
            </section>
            <section>
                <h2>Projects</h2>
                <ul>
                    <li>Project A - Description of project A.</li>
                    <li>Project B - Description of project B.</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;