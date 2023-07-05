import Link from 'next/link';
import { SiTwitter, SiGithub, SiLinkedin,
  SiMyanimelist, SiOsu, SiTwitch, SiInstagram
} from "react-icons/si";

export default function Footer() {

  return (
    <>
      <footer className={`wrap-footer `} >

        <div className={`footer-container`}>
          <div className="footer-content-1">
            <p className="f-name-1">Pucceu / mclovinexpress</p>
            <p className="f-name-2">from phone to film photography</p>
          </div>
          
          <div className="footer-content-2">
            <div className="f-icon-container">
              <Link href="https://myanimelist.net/profile/pucceu" className="f-icon-item-1" target="_blank" rel="noopener noreferrer">
                <SiMyanimelist />
              </Link>
              <Link href="https://twitter.com/pucceu" className="f-icon-item-1" target="_blank" rel="noopener noreferrer">
                <SiTwitter />
              </Link>
              <Link href="https://osu.ppy.sh/users/16319895" className="f-icon-item-7" target="_blank" rel="noopener noreferrer">
                <SiOsu />
              </Link>
              <Link href="https://www.twitch.tv/pucceu" className="f-icon-item-7" target="_blank" rel="noopener noreferrer">
                <SiTwitch />
              </Link>
              <Link href="https://www.instagram.com/pucceu.arc/?hl=en" className="f-icon-item-7" target="_blank" rel="noopener noreferrer">
                <SiInstagram />
              </Link>
            </div>
          </div>

        </div>

      </footer>
    </>
  )
}
