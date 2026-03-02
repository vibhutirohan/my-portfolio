import { FaBullseye, FaUsers, FaDumbbell } from "react-icons/fa6";
import "./styles/BeyondTech.css";

const BeyondTech = () => {
    return (
        <div className="beyond-section" id="beyond">
            <div className="beyond-container">
                <h2 className="beyond-title">
                    Beyond <span className="title-accent">Technology</span>
                </h2>

                <div className="beyond-grid">
                    <div className="beyond-card">
                        <div className="beyond-icon-wrapper">
                            <FaBullseye className="beyond-icon" />
                        </div>
                        <h3>Soccer</h3>
                        <p>
                            Passionate about soccer, enjoying both playing and following the sport.
                            The teamwork and strategy involved translate well to collaborative tech projects.
                        </p>
                    </div>

                    <div className="beyond-card">
                        <div className="beyond-icon-wrapper">
                            <FaUsers className="beyond-icon" />
                        </div>
                        <h3>Cricket</h3>
                        <p>
                            Active cricket player who values the communication, strategy, and coordination
                            skills developed through team sports.
                        </p>
                    </div>

                    <div className="beyond-card">
                        <div className="beyond-icon-wrapper">
                            <FaDumbbell className="beyond-icon" />
                        </div>
                        <h3>Fitness</h3>
                        <p>
                            Regular gym-goer who believes physical fitness supports mental clarity
                            and sustained productivity in technical work.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BeyondTech;
