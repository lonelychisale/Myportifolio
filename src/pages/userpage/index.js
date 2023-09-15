import '../../css/userpage/index.css';
import image from '../../images/img2.jpg'
import ussdimage from '../../images/ussd2.jpg'
import invetoryimage from '../../images/images1.jpg'
import portalimage from '../../images/images3.jpg'
import {FaDesktop,FaWpforms,FaCss3Alt, FaLock,FaUserSecret,FaRegIdBadge,FaOm,FaBars,FaRegFolder,FaRegFileAlt,FaWarehouse,FaCoins,FaCaretDown,FaBell, FaAdjust} from 'react-icons/fa';
import { useState, useEffect } from 'react';

function Dashboard() {
  const [scrolling, setScrolling] = useState(false);

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

  return (
    <div className="dashboard">
    <div className='headerdiv'>
      <div className={headerClass}>
        <h1>mypotfolio</h1>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>services</li>
          <li>projects</li>
          <li>contact</li>
        </ul>
        <h4 className='listcontrollers'><FaBars></FaBars></h4>
      </div>

      <div className='headercontents'>
      <div>
    <h1>Hello, I'm lonely Chisale</h1>
    <p>I'm a dedicated professional with expertise in cybersecurity and software development.</p>
    <p>My mission is to create innovative solutions that ensure the utmost security of computer systems and information, safeguarding them against cyber threats.</p>
</div>


        <div>
            <h3>my projects</h3>
        </div>

      </div>
      </div>

<div className='content'>
  <div className='justifycontent'>
    <div className='about'>
      <div>
      <img src={image}></img>
      </div>
    
      
      <div>
        <h3>who am i ?</h3>
        <h1>about</h1>
        <p>
        I am a versatile professional with a strong foundation in both software development and cybersecurity. My passion lies in creating secure and innovative solutions in the ever-evolving digital landscape. Here's a glimpse of my journey:
    </p>

    <h2>Software Development</h2>
    <ul>
        <li>Proficient in multiple programming languages, including Python, Java, and C++, with a focus on building efficient and scalable software applications.</li>
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

    <div className='services'> 
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
              <p>Utilizing cutting-edge technologies such as HTML5, CSS3, and JavaScript to create dynamic 
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
              <p>Building mobile applications for various platforms using HTML5, CSS3, 
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

          <h1>cyber security</h1>
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

    <div className='portifolio'>
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
                  <p>Conducted market research and competitor analysis using SEMrush and SpyFu tools to identify trends and opportunities, resulting in data-driven marketing decisions.
•	Implemented and managed Google Ads for schedul</p>
                </div>
              </div>
            </div>
            <div className='card'>
              <img src={ussdimage}></img>
              <div>
                <h1>USSD platform</h1>
                <div className='cardbody'>
                  <i>developed it for Farm Radio Trust</i><br></br>
                  <p>Conducted market research and competitor analysis using SEMrush and SpyFu tools to identify trends and opportunities, resulting in data-driven marketing decisions.
•	Implemented and managed Google Ads for schedul</p>
                </div>
              </div>
            </div>
            <div className='card'>
              <img src={portalimage}></img>
              <div>
                <h1>Student Portal</h1>
                <div className='cardbody'>
                  <i>developed it for Farm Radio Trust</i><br></br>
                  <p>Conducted market research and competitor analysis using SEMrush and SpyFu tools to identify trends and opportunities, resulting in data-driven marketing decisions.
•	Implemented and managed Google Ads for schedul</p>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  </div>

  <div className='footer'>
    <div>
      <h1>in need of me ?</h1>
    <div className='footercontent'>
      <div>
        <h3>contact details</h3>
        <i>email: lonelyfchisale@gmail.com</i><br></br>
        <i>phone: +265 886 691 384 / +265 988 170 023</i>
      </div>

      <div className='contactform'>
        <form>
          <h1>send message</h1>
          <div className='formgroup'>
            <label>email</label>
            <input type='text'></input>
          </div>

          <div className='formgroup'>
            <label>subject</label>
            <input type='text'></input>
          </div>

          <div className='formgroup'>
            <label>message</label>
            <textarea></textarea>
          </div>

          <div className='formgroup'>
            <input type='submit' value='send message'></input>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>
 
</div>


    </div>
  );
}

export default Dashboard;
