import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const styles = {
        text: "font-regular text-xs text-gray-700 tracking-wide leading-normal",
        icon: "fill-current cursor-pointer",
        }

  return (
    <div className={styles.text + "mx-6 pt-4 pb-4 bg-orange-300"}>
            <p className="flex flex-col justify-center pt-4 text-center ">
                E-commerce 
                <br /> 
                Desarrollado por Clara Vazquez
            </p>
            <div className="flex flex-row items-center justify-center pt-1 gap-x-2">
                <a href='https://github.com/clara-vg'
                target='_blanck'
                rel='noreferrer'
                >
                <FaGithub className={styles.icon} />
                </a>
                <a href='https://www.linkedin.com/in/clara-vazquez-622875177/'
                target='_blank'
                rel='noreferrer'
                >
            <FaLinkedin className={styles.icon} />
                </a>
            </div>
        </div>
  )
}

export default Footer
