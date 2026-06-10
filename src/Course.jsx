import './Course.css';
import ReactLogo from './assets/react.svg';
import VueLogo from './assets/vue-logo.jpg'
import AngularLogo from './assets/angular-logo.jpg'
import NodeLogo from './assets/node-logo.jpg'
import WebDevLogo from './assets/web-dev-logo.jpg'

function CourseCard() {
    return (
        <>
            <h1 className="heading">Available Courses</h1>
            <div className="courses">
                <div className="card">
                    <img
                        src={WebDevLogo}
                        alt="Course preview"
                        className="course-img"
                    />
                    <h1 className="title">Web Development Course</h1>
                    <p><strong>Instructor:</strong> Ram</p>
                    <p><strong>Duration:</strong> 3 Months</p>
                    <p><strong>Rating:</strong> 4.8/5</p>
                    <p><strong>Course Fee:</strong> Rs.3000</p>
                    <div className="button-box">
                        <button className="learn">Learn</button>
                    </div>
                </div>
                <div className="card">
                    <img
                        src={ReactLogo}
                        alt="Course preview"
                        className="course-img"
                    />
                    <h1 className="title">React Course</h1>
                    <p><strong>Instructor:</strong> Jai</p>
                    <p><strong>Duration:</strong> 3 Months</p>
                    <p><strong>Rating:</strong> 4.3/5</p>
                    <p><strong>Course Fee:</strong> Rs.4000</p>
                    <div className="button-box">
                        <button className="learn">Learn</button>
                    </div>
                </div>
                <div className="card">
                    <img
                        src={AngularLogo}
                        alt="Course preview"
                        className="course-img"
                    />
                    <h1 className="title">Angular Course</h1>
                    <p><strong>Instructor:</strong> Ram</p>
                    <p><strong>Duration:</strong> 3 Months</p>
                    <p><strong>Rating:</strong> 4.8/5</p>
                    <p><strong>Course Fee:</strong> Rs.3000</p>
                    <div className="button-box">
                        <button className="learn">Learn</button>
                    </div>
                </div>
                <div className="card">
                    <img
                        src={VueLogo}
                        alt="Course preview"
                        className="course-img"
                    />
                    <h1 className="title">Vue Course</h1>
                    <p><strong>Instructor:</strong> Ram</p>
                    <p><strong>Duration:</strong> 3 Months</p>
                    <p><strong>Rating:</strong> 4.8/5</p>
                    <p><strong>Course Fee:</strong> Rs.3000</p>
                    <div className="button-box">
                        <button className="learn">Learn</button>
                    </div>
                </div>
                <div className="card">
                    <img
                        src={NodeLogo}
                        alt="Course preview"
                        className="course-img"
                    />
                    <h1 className="title">Node Course</h1>
                    <p><strong>Instructor:</strong> Ram</p>
                    <p><strong>Duration:</strong> 3 Months</p>
                    <p><strong>Rating:</strong> 4.8/5</p>
                    <p><strong>Course Fee:</strong> Rs.3000</p>
                    <div className="button-box">
                        <button className="learn">Learn</button>
                    </div>
                </div>
            </div></>
    )
}

export default CourseCard;