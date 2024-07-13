import FacebookIcon from "../SvgComponents/FacebookIcon";
import InstagramIcon from "../SvgComponents/InstagramIcon";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footeContainer}>
      <div className={style.copyright}>
        <p>© 2023 Los Angeles Soccer Evolution. All Rights Reserved.</p>
        <ul className={style.footerSocialMedia}>
          <li>
            <a href="https://www.instagram.com/lasevolution/" target="_blank">
              <InstagramIcon className={style.footerIcon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/losangelesevolution"
              target="_blank"
            >
              <FacebookIcon className={style.footerIcon} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
