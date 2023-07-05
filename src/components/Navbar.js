import Link from 'next/link';
import { useState } from 'react';
import { TbCameraBolt } from "react-icons/tb";
import { Drawer } from 'antd';

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const showNavContent = () => {
    setOpenNav(true);
  };
  const onClose = () => {
    setOpenNav(false);
  };

  return (
    <>
      <nav className={`wrap-navbar `} >
        <div className={`nav-icon`} onClick={showNavContent} >
          <TbCameraBolt className={`nav-icon-item`} />
        </div>
      </nav>

      <Drawer title="Menu" placement="right" onClose={onClose} open={openNav} className={`nav-offcanvas`}>
        <div className={`nav-menu`}>
          <Link href="/" className={`nav-links`} onClick={onClose}>Home</Link>
          <div href="archives" className={`nav-links comingsoon`}>Archives <span>coming soon</span></div>
          <Link href="phone-photography" className={`nav-links`} onClick={onClose}>Phone Photography</Link>
          <div href="#" className={`nav-links comingsoon`}>Film Photography <span>coming soon</span></div>
        </div>
        {/* <div className={`nav-footer`}>
        </div> */}
      </Drawer>

    </>
  )
}
