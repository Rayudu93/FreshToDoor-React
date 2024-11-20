import { Link } from 'react-router-dom';
import './Header.css';

function HeaderPart() {
    return (
        <div className="top-menu">
            <div style={{ margin: '20px 0 0 160px' }}>
            <label><svg width="149" height="38" viewBox="0 0 149 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.9349 25.1106H5.07092V24.2166C5.07092 12.8916 14.0119 3.67857 25.0039 3.67857C35.9959 3.67857 44.9349 12.8916 44.9349 24.2166V25.1106Z" fill="#F29F05"/>
            <path d="M36.9579 19.5816C36.6514 19.5796 36.3531 19.483 36.1036 19.3051C35.8541 19.1272 35.6656 18.8766 35.5638 18.5876C34.7825 16.3994 33.3491 14.5034 31.4568 13.1552C29.5644 11.807 27.3042 11.0714 24.9809 11.0476C24.5825 11.0374 24.2039 10.872 23.9258 10.5866C23.6476 10.3013 23.4919 9.91855 23.4919 9.52007C23.4919 9.12158 23.6476 8.73886 23.9258 8.45351C24.2039 8.16816 24.5825 8.00276 24.9809 7.99257C27.9162 8.02276 30.7718 8.95228 33.1624 10.6558C35.5531 12.3593 37.364 14.7549 38.3509 17.5196C38.4903 17.8967 38.4768 18.3133 38.3134 18.6806C38.1499 19.0479 37.8493 19.3368 37.4759 19.4856C37.3105 19.5491 37.1349 19.5816 36.9579 19.5816V19.5816Z" fill="white"/>
            <path d="M31.0998 37.9996C27.3819 37.9453 23.8374 36.4187 21.2434 33.7547C18.6495 31.0906 17.218 27.5066 17.2629 23.7886H20.2378C20.201 25.2381 20.4548 26.6804 20.9841 28.0303C21.5134 29.3803 22.3075 30.6107 23.3197 31.6489C24.332 32.6872 25.5418 33.5123 26.8779 34.0757C28.214 34.6391 29.6493 34.9293 31.0994 34.9293C32.5494 34.9293 33.9847 34.6391 35.3208 34.0757C36.6569 33.5123 37.8667 32.6872 38.879 31.6489C39.8912 30.6107 40.6854 29.3803 41.2146 28.0303C41.7439 26.6804 41.9977 25.2381 41.9609 23.7886H44.9358C44.9807 27.5064 43.5494 31.0903 40.9556 33.7543C38.3619 36.4184 34.8176 37.945 31.0998 37.9996V37.9996Z" fill="#363636"/>
            <path d="M38.1599 24.0726C38.1875 25.0172 38.0252 25.9577 37.6827 26.8384C37.3403 27.7192 36.8246 28.5222 36.1662 29.2001C35.5078 29.878 34.72 30.4169 33.8496 30.7848C32.9793 31.1528 32.0439 31.3424 31.0989 31.3424C30.1539 31.3424 29.2185 31.1528 28.3482 30.7848C27.4778 30.4169 26.6901 29.878 26.0317 29.2001C25.3733 28.5222 24.8575 27.7192 24.5151 26.8384C24.1726 25.9577 24.0104 25.0172 24.0379 24.0726H38.1599Z" fill="#363636"/>
            <path d="M48.5209 25.6516H1.48889C1.09054 25.6414 0.71195 25.476 0.433807 25.1906C0.155665 24.9053 0 24.5226 0 24.1241C0 23.7256 0.155665 23.3429 0.433807 23.0575C0.71195 22.7722 1.09054 22.6068 1.48889 22.5966H48.5219C48.9203 22.6068 49.2989 22.7722 49.577 23.0575C49.8551 23.3429 50.0108 23.7256 50.0108 24.1241C50.0108 24.5226 49.8551 24.9053 49.577 25.1906C49.2989 25.476 48.9203 25.6414 48.5219 25.6516H48.5209Z" fill="#F29F05"/>
            <path d="M25.0039 6.73257C24.8059 6.72997 24.6103 6.68836 24.4284 6.61015C24.2465 6.53193 24.0818 6.41863 23.9437 6.27673C23.8056 6.13482 23.6968 5.96709 23.6236 5.78313C23.5504 5.59916 23.5141 5.40256 23.5169 5.20457V1.52657C23.5117 1.32799 23.5464 1.13038 23.6188 0.945404C23.6913 0.760429 23.8 0.591832 23.9386 0.449554C24.0773 0.307276 24.243 0.194198 24.426 0.116989C24.6091 0.0397799 24.8057 0 25.0044 0C25.203 0 25.3996 0.0397799 25.5827 0.116989C25.7657 0.194198 25.9314 0.307276 26.0701 0.449554C26.2087 0.591832 26.3175 0.760429 26.3899 0.945404C26.4623 1.13038 26.497 1.32799 26.4919 1.52657V5.20457C26.4945 5.40261 26.4581 5.59923 26.3848 5.7832C26.3114 5.96717 26.2026 6.1349 26.0644 6.27679C25.9262 6.41868 25.7614 6.53196 25.5794 6.61017C25.3975 6.68837 25.2019 6.72997 25.0039 6.73257V6.73257Z" fill="#F29F05"/>
            <path d="M13.9409 31.0646H4.46387C4.06552 31.0544 3.68693 30.889 3.40878 30.6036C3.13064 30.3183 2.97498 29.9356 2.97498 29.5371C2.97498 29.1386 3.13064 28.7559 3.40878 28.4705C3.68693 28.1852 4.06552 28.0198 4.46387 28.0096H13.9379C14.3362 28.0198 14.7148 28.1852 14.993 28.4705C15.2711 28.7559 15.4268 29.1386 15.4268 29.5371C15.4268 29.9356 15.2711 30.3183 14.993 30.6036C14.7148 30.889 14.3362 31.0544 13.9379 31.0646H13.9409Z" fill="#363636"/>
            <path d="M15.4249 36.4726H8.92493C8.52657 36.4624 8.14798 36.297 7.86984 36.0116C7.5917 35.7263 7.43604 35.3436 7.43604 34.9451C7.43604 34.5466 7.5917 34.1639 7.86984 33.8785C8.14798 33.5932 8.52657 33.4278 8.92493 33.4176H15.4249C15.8233 33.4278 16.2019 33.5932 16.48 33.8785C16.7582 34.1639 16.9138 34.5466 16.9138 34.9451C16.9138 35.3436 16.7582 35.7263 16.48 36.0116C16.2019 36.297 15.8233 36.4624 15.4249 36.4726Z" fill="#363636"/>
            <path d="M70.3839 13.9596V16.6996H64.6639V19.6596H68.9439V22.3196H64.6639V27.9996H61.2439V13.9596H70.3839ZM80.9214 25.5196H75.6814L74.8414 27.9996H71.2614L76.3414 13.9596H80.3014L85.3814 27.9996H81.7614L80.9214 25.5196ZM80.0414 22.8796L78.3014 17.7396L76.5814 22.8796H80.0414ZM92.0075 28.1396C90.9808 28.1396 90.0608 27.9729 89.2475 27.6396C88.4342 27.3062 87.7808 26.8129 87.2875 26.1596C86.8075 25.5062 86.5542 24.7196 86.5275 23.7996H90.1675C90.2208 24.3196 90.4008 24.7196 90.7075 24.9996C91.0142 25.2662 91.4142 25.3996 91.9075 25.3996C92.4142 25.3996 92.8142 25.2862 93.1075 25.0596C93.4008 24.8196 93.5475 24.4929 93.5475 24.0796C93.5475 23.7329 93.4275 23.4462 93.1875 23.2196C92.9608 22.9929 92.6742 22.8062 92.3275 22.6596C91.9942 22.5129 91.5142 22.3462 90.8875 22.1596C89.9808 21.8796 89.2408 21.5996 88.6675 21.3196C88.0942 21.0396 87.6008 20.6262 87.1875 20.0796C86.7742 19.5329 86.5675 18.8196 86.5675 17.9396C86.5675 16.6329 87.0408 15.6129 87.9875 14.8796C88.9342 14.1329 90.1675 13.7596 91.6875 13.7596C93.2342 13.7596 94.4808 14.1329 95.4275 14.8796C96.3742 15.6129 96.8808 16.6396 96.9475 17.9596H93.2475C93.2208 17.5062 93.0542 17.1529 92.7475 16.8996C92.4408 16.6329 92.0475 16.4996 91.5675 16.4996C91.1542 16.4996 90.8208 16.6129 90.5675 16.8396C90.3142 17.0529 90.1875 17.3662 90.1875 17.7796C90.1875 18.2329 90.4008 18.5862 90.8275 18.8396C91.2542 19.0929 91.9208 19.3662 92.8275 19.6596C93.7342 19.9662 94.4675 20.2596 95.0275 20.5396C95.6008 20.8196 96.0942 21.2262 96.5075 21.7596C96.9208 22.2929 97.1275 22.9796 97.1275 23.8196C97.1275 24.6196 96.9208 25.3462 96.5075 25.9996C96.1075 26.6529 95.5208 27.1729 94.7475 27.5596C93.9742 27.9462 93.0608 28.1396 92.0075 28.1396ZM109.332 13.9596V16.6996H105.612V27.9996H102.192V16.6996H98.4722V13.9596H109.332Z" fill="#363636"/>
            <path d="M114.469 16.6996V19.5396H119.049V22.1796H114.469V25.2596H119.649V27.9996H111.049V13.9596H119.649V16.6996H114.469ZM130.609 25.5196H125.369L124.529 27.9996H120.949L126.029 13.9596H129.989L135.069 27.9996H131.449L130.609 25.5196ZM129.729 22.8796L127.989 17.7396L126.269 22.8796H129.729ZM146.715 13.9596V16.6996H142.995V27.9996H139.575V16.6996H135.855V13.9596H146.715Z" fill="#F29F05"/>
            </svg></label>
            </div>
            <input className="search-menu-btn" type="text" placeholder="Enter to Search" />
            <ul>
                <li>
                    <Link to="/" style={{color:"inherit",textDecoration:"none"}}>Home</Link>
                </li>
                <li>
                    <Link to="/about" style={{color:"inherit",textDecoration:"none"}}>About</Link>
                </li>
                <li>
                    <Link to="/contact" style={{color:"inherit",textDecoration:"none"}}>Contact</Link>
                </li>
                <li>
                    <Link to="/cart" style={{color:"inherit",textDecoration:"none"}}>Cart</Link>
                </li>
                <li>
                    <Link to="login">
                        <i className="bi bi-person-circle" id="sign-bt"></i>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default HeaderPart;
