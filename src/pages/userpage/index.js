import '../../css/userpage/index.css';
import image from '../../images/img2.jpg'
import ussdimage from '../../images/ussd2.jpg'
import invetoryimage from '../../images/images1.jpg'
import portalimage from '../../images/images3.jpg'
import TextAnimation from '../textheader';
import {FaDesktop,FaWpforms,FaCss3Alt, FaLock,FaUserSecret,FaRegIdBadge,FaOm,FaBars,FaRegFolder,FaRegFileAlt,FaWarehouse,FaCoins,FaCaretDown,FaBell, FaAdjust} from 'react-icons/fa';
import { useState, useEffect } from 'react';

function Dashboard() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Add state for menu visibility

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Add a scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle scroll events
  const handleScroll = () => {
    // Check the scroll position, e.g., 200 pixels from the top
    if (window.scrollY > 1) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Define CSS classes based on the scrolling state
  const headerClass = scrolling ? 'header scrolled' : 'header';
  const menuClass = isMenuVisible ? 'menu show-menu' : 'menu'; // Add a class for menu visibility

  return (
    <div className="dashboard">
    <div className="headerdiv">
        <div className={headerClass}>
          <h1>mypotfolio</h1>
          <ul className={`menu ${isMenuVisible ? 'show-menu' : ''}`}>
            <li><a href='#'>home</a></li>
            <li><a href='#about'>about</a></li>
            <li><a href='#services'>services</a></li>
            <li><a href='#experiences'>experience</a></li>
            <li><a href='#contact'>contact</a></li>
          </ul>
          <h4 className='listcontrollers' onClick={toggleMenu}><FaBars></FaBars></h4>
        </div>

      <div className='headercontents'>
      <div>
    <h1><TextAnimation /></h1>
    <p>I'm a dedicated professional with expertise in cybersecurity and software development.</p>
    <p>My mission is to create innovative solutions that ensure the utmost security of computer systems and information, safeguarding them against cyber threats.</p>
</div>


        <div>
            <h3><a href='#projects'> my projects</a></h3>
        </div>

      </div>
      </div>

<div className='content'>
  <div className='justifycontent'>
    <div className='about'>
      <div>
      <img src={image}></img>
      </div>
    
      
      <div id='about'>
        <h3>who am i ?</h3>
        <h1>about</h1>
        <p>
        I am a versatile professional with a strong foundation in both software development and cybersecurity. My passion lies in creating secure and innovative solutions in the ever-evolving digital landscape. Here's a glimpse of my journey:
    </p>

    <h2>Software Development</h2>
    <ul>
        <li>Proficient in multiple programming languages, including html, CSS, bootstrap, JavaScript, Node JS, React JS, PHP, Laravel, Django framework, Kivy python framework, spring boot framework,node JS, C#, with a focus on building efficient and scalable software applications.</li>
        <li>Experienced in full-stack development, from designing user interfaces to managing databases and server-side logic.</li>
        <li>Committed to writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.</li>
    </ul>

    <h2>Cybersecurity</h2>
    <ul>
        <li>Dedicated to safeguarding digital assets and data against cyber threats through proactive risk assessment and robust security measures.</li>
        <li>Skilled in conducting penetration testing and vulnerability assessments to identify and address potential weaknesses in systems and networks.</li>
        <li>Well-versed in compliance frameworks and standards, including NIST, ISO 27001, and GDPR, to ensure regulatory adherence.</li>
    </ul>
<div>
<a href='https://drive.google.com/file/d/1OfunycKN_s4snMIAtJ_Ex84t9J-p6q4D/view'> my curriculum vitae</a>
</div>

      </div>

      
      
    </div>

    <div className='services' id='services'> 
      <div className='servicesconted'>
        <h3>what i do ?</h3>
        <h1>services</h1>

        <div className='listservices'>
          <h1>software development</h1>
          <div className='row one'>
            <div className='card'>
              <div className='cardheader'>
                <h3><FaCss3Alt></FaCss3Alt></h3>
                <h2>web app</h2>
              </div>
              <div className='cardbody'>
              <p>Utilizing cutting-edge technologies such as HTML5, CSS3,php, and JavaScript to create dynamic 
                and responsive web applications.</p>
              </div>
            </div>
            <div>
            <div className='card'>
            <i class="fa-brands fa-html5"></i>
              <div className='cardheader'>
                <h3><FaRegIdBadge></FaRegIdBadge></h3>
                <h2>mobile app development</h2>
              </div>
              <div className='cardbody'>
              <p>Building mobile applications for various platforms using Java, kotlin, 
                and other relevant technologies.</p>
              </div>
            </div>
            </div>
            <div>
            <div className='card'>
              <div className='cardheader'>
                <h3><FaDesktop></FaDesktop></h3>
                <h2>desktop app development</h2>
              </div>
              <div className='cardbody'>
              <p>Creating desktop applications with 
                <br></br>a focus on user-friendly 
                interfaces and efficient functionality.</p>
              </div>
            </div>
            </div>
          </div>

          <h1 className='cyberservices'>cyber security</h1>
          <div className='row two'>
          <div className='card'>
              <div className='cardheader'>
                <h3><FaUserSecret></FaUserSecret></h3>
                <h2>penetration testing</h2>
              </div>
              <div className='cardbody'>
              <p>Performing thorough penetration tests using industry-standard tools and methodologies to 
                identify vulnerabilities in systems and networks.</p>
              </div>
            </div>
            <div className='card'>
              <div className='cardheader'>
                <h3><FaOm></FaOm></h3>
                <h2>vulnerability assesment</h2>
              </div>
              <div className='cardbody'>
              <p>Conducting comprehensive vulnerability assessments to pinpoint weaknesses in IT 
                infrastructures and develop mitigation strategies.</p>
              </div>
            </div>
            <div className='card'>
              <div className='cardheader'>
                <h3><FaLock></FaLock></h3>
                <h2>vulnerability patching</h2>
              </div>
              <div className='cardbody'>
              <p>Implementing prompt and effective vulnerability patching 
                solutions to secure systems and prevent potential breaches.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='experiences' id='experiences'>
      <div className='experiencescontents'>
        <h1>experiences</h1>
        <div className='row'>
          <div className='card softwadevelopment'>
            <h3><span>3 years</span> <br></br>as full stack developer</h3>
          </div>
          <div className='card cybersecurity'>
            <h3>
              <span>1 year</span><br></br> as cyber security personel
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div className='portifolio' id='projects'>
      <div className='portifoliocontent'>
        <h3>what i did ?</h3>
        <h1>projects</h1>

        <div className='listportifolios'>
        <div className='row one'>
            <div className='card'>
              <img src={invetoryimage}></img>
              <div>
                <h1>invertory management system</h1>
                <div className='cardbody'>
                  <i>developed it for Farm Radio Trust</i><br></br>
                  <p>This system is a web based system , with interction to the database. It was developed for tracking in the flow is companies among employees and state of the items as time goes</p>
                </div>
              </div>
            </div>
            <div className='card'>
              <img src={ussdimage}></img>
              <div>
                <h1>USSD platform</h1>
                <div className='cardbody'>
                  <i>developed it for Farm Radio Trust</i><br></br>
                  <p>This is also a web based system , with interaction to the databse. It was developed to fill in the gap on the limitation in the provision of agricultural extension services that the company provides due to limitations that some already existing digital paltforms had</p>
                </div>
              </div>
            </div>
            <div className='card'>
              <img src={portalimage}></img>
              <div>
                <h1>Student Portal</h1>
                <div className='cardbody'>
                  <i>developed it for Ekwendeni College of Health Science</i><br></br>
                  <p>This is also a web based application ,with database interaction. It was mainly developed for management of students results</p>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  </div>

  <div className='footer' id='contact'>
    <div>
      <h1>in need of me ?</h1>
      <div className='footercontent'>
        <div className='justigycontent'>
          <div className='contactdetails'>
            <h3>reach me on:</h3>
            <h5>
              <i>email    : lonelyfchisale@gmail.com</i><br></br>
              <i>tel      : +265 886 691384 / +265 988 170 023</i><br></br>
              <i>linkedin : </i>
            </h5>
          </div>
          <div className='contactform'>
            <h3>send message</h3>
            <form>
              <div className='formgroup'>
                <label>full name</label>
                <input type='text'></input>
              </div>
              <div className='formgroup'>
                <label>email adress</label>
                <input type='email'></input>
              </div>
              <div className='formgroup'>
                <label>email subject</label>
                <input type='text'></input>
              </div>
              <div className='formgroup'>
                <label>message</label>
                <textarea></textarea>
              </div>
              <div className='formgroup'>
                <input type='submit' value='send email'></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</div>


    </div>
  );
}

export default Dashboard;
