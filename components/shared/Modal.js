import React, { useState, createContext, useContext } from "react";

import styles from "@styles/shared/Modal.module.css"

// const Modal = ({ children, title }) => {
//     return <div className={styles.backdrop}>
//         <div className={styles.container}>
//             <div className={styles.header}>
//                 <div>
//                     <i className="fas fa-exclamation-circle text-blue-500"></i>
//                     <span className="font-bold text-gray-700 text-lg">{title}</span>
//                 </div>
//                 <div>
//                     <button><i className="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i></button>
//                 </div>
//             </div>
//             <div className={styles.body}>
//                 {children}
//             </div>
//             <div className={styles.footer}>
//                 <button class="bg-purple-500 mr-1 rounded text-sm py-2 px-3 text-white hover:bg-purple-600 transition duration-150">OK</button>
//             </div>
//         </div>
//     </div>;
// }

// export default Modal;




//the name of this context will be DataContext
const ModalContext = createContext({});

const Modal = (props) => {
    const [activeTabID, setActiveTabID] = useState("a");
    //since this component will provide data to the child components, we will use DataContext.Provider
    return (
        <ModalContext.Provider value={[activeTabID, setActiveTabID]}>
            <div className={styles.backdrop}>
                <div className={styles.container}>{props.children}</div></div>
        </ModalContext.Provider>
    );
}

const Header = ({ children }) => {
    return <div className={styles.header} >
        <div>
            <i className="fas fa-exclamation-circle text-blue-500"></i>
            <span className="font-bold text-gray-700 text-lg">{children}</span>
        </div>
        <div>
            <button><i className="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i></button>
        </div>
    </div >;
}

const Body = ({ children }) => {
    return <div className={styles.body}>
        {children}
    </div>;
}

const Footer = ({ children }) => {
    return <div className={styles.footer}>
        {children}
        {/* <button class="bg-purple-500 mr-1 rounded text-sm py-2 px-3 text-white hover:bg-purple-600 transition duration-150">OK</button> */}
    </div>;
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
