import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import png from "./png1.png";
import BusinessIcon from "@mui/icons-material/Business";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "./index.css";
import SendIcon from "@mui/icons-material/Send";
import png2 from "./png2.png";
import vid from "./vid.mp4";
import Send from "@mui/icons-material/Send";
const Website = () => {
  return (
    <div className="wrapper">
      <div className="part1">
        <div className="leftheader">
          <p className="pheader">QuariBox</p>
        </div>
        <div className="rightheader">
          <ul className="ul1">
            <li className="li1">Home</li>
            <li className="li1">Our Services</li>
            <li className="li1">Find Us</li>
            <li className="li1">
              <SearchIcon className="searchicon" />
            </li>
          </ul>
        </div>
        <div className="menuicon">
          <MenuIcon />
        </div>
      </div>
      <div className="part2">
        <div className="leftmain">
          <p className="p2 p2big">A trusted provider of </p>
          <p className="bold2 p2">courier services</p>
          <p className="light2 p2">
            we deliver your products safely to your home in a reasonable time.
          </p>
          <button className="button2">Get Started </button>
        </div>
        <div className="rightmain">
          <div className="img">
            <img src={png} alt="" className="png" />
          </div>
        </div>
      </div>
      <div className="part3">
        <div className="intro">
          <p className="p3red">SERVICES</p>
          <p className="p3bold">Our Services for you</p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="topcard">
              <div className="circle">
                {" "}
                <div className="icons">
                  <BusinessIcon sx={{ fontSize: "40px" }} className="iconss" />
                </div>
              </div>
            </div>
            <div className="centercard">
              <h1 className="h13">Business Services</h1>
              <p className="p3">
                adipisicing elit. Tempora aspernatur, laborum distinctio dolore
                nihil quisquam
              </p>
            </div>
            <ul className="ulcard">
              <li className="licard">
                <FiberManualRecordIcon
                  className="iconsss"
                  sx={{ fontSize: "15px" }}
                  style={{ fill: "red", marginLeft: "1em" }}
                />{" "}
                Corporate goods
              </li>
              <li className="licard">
                {" "}
                <FiberManualRecordIcon
                  className="iconsss"
                  sx={{ fontSize: "15px" }}
                  style={{ fill: "red", marginLeft: "1em" }}
                />{" "}
                Shipment
              </li>
              <li className="licard">
                {" "}
                <FiberManualRecordIcon
                  className="iconsss"
                  sx={{ fontSize: "15px" }}
                  style={{ fill: "red", marginLeft: "1em" }}
                />{" "}
                Accessories
              </li>
            </ul>
            <button className="buttoncard">Learn More</button>
          </div>
          <div className="card">
            <div className="topcard">
              <div className="circle">
                {" "}
                <div className="icons">
                  <BusinessIcon sx={{ fontSize: "40px" }} className="iconss" />
                </div>
              </div>
            </div>
            <div className="centercard">
              <h1 className="h13">Business Services</h1>
              <p className="p3">
                consectetur adipisicing elit. Tre nihil quisquam
              </p>
            </div>
            <ul className="ulcard">
              <li className="licard">
                {" "}
                <FiberManualRecordIcon
                  className="iconsss"
                  sx={{ fontSize: "15px" }}
                  style={{ fill: "red", marginLeft: "1em" }}
                />{" "}
                Corporate goods
              </li>
              <li className="licard">
                {" "}
                <FiberManualRecordIcon
                  className="iconsss"
                  sx={{ fontSize: "15px" }}
                  style={{ fill: "red", marginLeft: "1em" }}
                />{" "}
                Shipment
              </li>
              <li className="licard">
                {" "}
                <FiberManualRecordIcon
                  className="iconsss"
                  sx={{ fontSize: "15px" }}
                  style={{ fill: "red", marginLeft: "1em" }}
                />{" "}
                Accessories
              </li>
            </ul>
            <button className="buttoncard buttoncard1">Learn More</button>
          </div>{" "}
          <div className="card">
            <div className="topcard">
              <div className="circle">
                <div className="icons">
                  <BusinessIcon sx={{ fontSize: "40px" }} className="iconss" />
                </div>
              </div>
            </div>
            <div className="centercard">
              <h1 className="h13">Business Services</h1>
              <p className="p3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. dolore
                nihil quisquam
              </p>
            </div>
            <ul className="ulcard">
              <li className="licard">
                {" "}
                <FiberManualRecordIcon
                  className="iconsss"
                  sx={{ fontSize: "15px" }}
                  style={{ fill: "red", marginLeft: "1em" }}
                />{" "}
                Corporate goods
              </li>
              <li className="licard">
                {" "}
                <FiberManualRecordIcon
                  className="iconsss"
                  sx={{ fontSize: "15px" }}
                  style={{ fill: "red", marginLeft: "1em" }}
                />{" "}
                Shipment
              </li>
              <li className="licard">
                {" "}
                <FiberManualRecordIcon
                  className="iconsss"
                  sx={{ fontSize: "15px" }}
                  style={{ fill: "red", marginLeft: "1em" }}
                />{" "}
                Accessories
              </li>
            </ul>
            <button className="buttoncard">Learn More</button>
          </div>
        </div>
      </div>
      <div className="part4">
        <div className="info">
          <div className="icon4">
            <EmojiEventsIcon
              style={{ fill: "green" }}
              sx={{ fontSize: "70px" }}
            />
          </div>
          <div className="nums">26+</div>
          <div className="awards">Awards won</div>
        </div>
        <div className="info">
          <div className="icon4">
            <LocalLibraryIcon
              style={{ fill: "blue" }}
              sx={{ fontSize: "70px" }}
            />
          </div>
          <div className="nums">26+</div>
          <div className="awards">Awards won</div>
        </div>{" "}
        <div className="info">
          <div className="icon4">
            <LocalShippingIcon
              style={{ fill: "green" }}
              sx={{ fontSize: "70px" }}
            />
          </div>
          <div className="nums">26+</div>
          <div className="awards">Awards won</div>
        </div>{" "}
        <div className="info">
          <div className="icon4">
            <BusinessCenterIcon
              style={{ fill: "green" }}
              sx={{ fontSize: "70px" }}
            />
          </div>
          <div className="nums">26+</div>
          <div className="awards">Awards won</div>
        </div>
      </div>
      <div className="part5">
        <div className="videocard">
          <div className="videocardd">
            <a href="https://www.youtube.com/watch?v=oeYElSu3gEc&ab_channel=FilmSelectTrailer">
              <PlayCircleFilledIcon
                sx={{ fontSize: "80px" }}
                className="play"
                style={{ fill: "red" }}
              />
            </a>
            <p className="fastest">FASTEST DELIVERY</p>
            <p className="p5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              facere magnam asperiores obcaecati illum ea distinctio ipsam
            </p>
          </div>
        </div>
      </div>
      <div className="part6">
        <div className="intro6">
          <FormatQuoteIcon
            className="quoteIcon"
            style={{ fill: "goldenrod" }}
            sx={{ fontSize: "80px" }}
          />
        </div>
        <div className="testimonial">
          <p className="ptest">TESTIMONIAL</p>
          <p className="our">Our Awesome Clients</p>
        </div>
      </div>
      <div className="part7">
        <div className="intro7">
          <div className="wrapper7">
            <div className="img7">
              <img src={png2} alt="" className="png2" />
            </div>
            <p className="p7">REQUEST A CALLBACK</p>
            <p className="p7bold">We will contact in the shortest time.</p>
          </div>
        </div>
        <div className="contact">
          <div className="contacte">
            <input type="text" className="input7" placeholder="Name" />
            <input type="text" className="input7" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
            <button className="button7">
              Send Message <SendIcon className="sendicon" />{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="part9">
        <div className="top9">
          <div className="top9left">
            <div className="wrapperr9">
              <h1 className="h9">Get an update every week</h1>
              <p className="p9">
                We ensure that your product is delivered in the safest possible
                manner. ath the correct location at the right time
              </p>
            </div>
          </div>
          <div className="top9right">
            <div className="wrapper91">
              <h1 className="h91">SUBSCRIBE TO NEWSLETTER</h1>
              <div className="input9">
                <input
                  type="text"
                  placeholder="Enter your mail"
                  className="input91"
                />
                <button className="button9">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="center9">
          <div className="centerleft">
            <h1 className="logo9">QuarirBox</h1>
            <p className="plogo">
              The most trusted Courier company in your area
            </p>
          </div>
          <div className="centerright">
            <ul className="ul9">
              <h2 className="h2s">Servies</h2>
              <li className="li9">Blogs</li>
              <li className="li9">Movers website</li>
              <li className="li9">Traffic Update</li>
            </ul>
            <ul className="ul9">
              <h2 className="h2s">Servies</h2>
              <li className="li9">Blogs</li>
              <li className="li9">Movers website</li>
              <li className="li9">Traffic Update</li>
            </ul>
            <ul className="ul9">
              <h2 className="h2s">Servies</h2>
              <li className="li9">Blogs</li>
              <li className="li9">Movers website</li>
              <li className="li9">Traffic Update</li>
            </ul>
          </div>
        </div>
        <div className="final9">
          <div className="finalleft">
            <p className="copywrite">All rights Reserved Your Company.2021</p>
          </div>
          <div className="finalright">Made with by ThemeWagon</div>
        </div>
      </div>
    </div>
  );
};
export default Website;
