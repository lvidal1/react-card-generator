import React from "react";

const Toolbar = () => {
    return <div className="w-full flex justify-between p-5">
        <div className="w-12 h-12 flex justify-center items-center bg-purple-100">
            <a href="#">1</a>
        </div>
        <div className="w-12 h-12 flex justify-center items-center bg-purple-100">
            <a href="#">2</a>
        </div>
        <div className="w-12 h-12 flex justify-center items-center bg-purple-100">
            <a href="#">3</a>
        </div>
        <div className="w-12 h-12 flex justify-center items-center bg-purple-100">
            <a href="#">4</a>
        </div>
        <div className="w-12 h-12 flex justify-center items-center bg-purple-100">
            <a href="#">5</a>
        </div>
    </div>;
}

export default Toolbar;