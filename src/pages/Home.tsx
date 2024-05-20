import { Link } from "react-router-dom";
import img_stopwatch from "../assets/stop-watch-thumb.png";
import img_userlist from "../assets/user-list-thumb.png";
import img_quoteapp from "../assets/Portfolio.png";

const Home = () => {
    return (
        <div className="flex px-4 justify-center dark:bg-gray-800 bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] gap-6 relative z-10 flex-col sm:flex-row pt-24 pb-6 h-full">
            <Link to="stop-watch">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg aspect-[5/4] border-b border-gray-700" src={img_stopwatch} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Stop watch app</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">You can use this app for sports or anything that requires time capturing.</p>
                        <button className="btn-primary w-50 mx-auto">View App</button>
                    </div>
                </div>
            </Link>
            <Link to="user-list">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg aspect-[5/4] border-b border-gray-700" src={img_userlist} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">User list app</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">An app that will show personalized card for every users in list.</p>
                        <button className="btn-primary w-50 mx-auto">View App</button>
                    </div>
                </div>
            </Link>            
            <Link to="quote-app">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg aspect-[5/4] border-b border-gray-700" src={img_quoteapp} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Random quote generator</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">You can use this app to generate random quotes</p>
                        <button className="btn-primary w-50 mx-auto">View App</button>
                    </div>
                </div>
            </Link>     
        </div>
    );
};

export default Home;