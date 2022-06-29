import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import UserNav from "./UserNav";
import "./MobileMenu.scss";

const MobileMenu = () => {
  const openMobileModal = () => {
    console.log("openMobileModal");
    document.getElementById("myModal").style.display = "block";
  };
  window.onclick = function (event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  };
  return (
    <>
      <div className="md:hidden">
        <button
          className="px-5 :py-2 hover:text-primary transition-all"
          onClick={() => {
            openMobileModal();
          }}
        >
          <FontAwesomeIcon className="text-4xl " icon={faBars} />
        </button>
        <div id="myModal" className="mobileMenuModal">
          <div className="mobileMenuModalContent bg-color-background">
            <UserNav />

            <ul className="text-xl py-10 px-5">
              <li className="mb-4">
                <a className="hover:text-primary" href="#MovieCarousel-wrapper">
                  Lịch chiếu
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:text-primary" href="#MovieTabs-wrapper">
                  Cụm rạp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
