import gitHubLogo from '../assets/imgs/github-logo.png';

export const AppFotter = () => {
    return (
        <footer className="main-footer full ">
            <div className="footer-logo flex direction-col align-center">
                <p>&copy; AWS Fullstack Todo Prog by Michael Uzan</p>
                <img src="https://www.careology.health/images/footer/logo-32.svg" alt="logo" />
            </div>
            <div className="footer-desc">
                <ul className="social-links clean-list flex direction-row justify-center">
                    <li>
                        <a target="_blank" href="https://github.com/Michael-Uzan/todo-app-aws">
                            <p>See Code on GitHub Here: </p>
                            <img src={gitHubLogo} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}