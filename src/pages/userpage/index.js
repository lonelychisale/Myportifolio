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
            <h1>i am lonely chisale</h1>
            <p>A professional  cyber security and software developer personnel.<br></br>
                 I aim at developing innovative solutions for making sure that all computer systems and information are well secured from cyber-attacks.</p>
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
        <p>•	Conducted market research and competitor analysis using SEMrush and SpyFu tools to identify trends and opportunities, resulting in data-driven marketing decisions.
•	Implemented and managed Google Ads campaigns, optimizing keyword targeting and ad copy to achieve a 20% increase in website traffic and conversions.
 by 25%.
</p>

<p>•	Conducted market research and competitor analysis using SEMrush and SpyFu tools to identify trends and opportunities, resulting in data-driven marketing decisions.
•	Implemented and managed Google Ads campaigns, optimizing keyword targeting and ad copy to achieve a 20% increase in website traffic and conversions.
•	Created and managed social media marketing campaigns, using Hootsuite for scheduling and analytics, increasing engagement by 40% and growing the client's social media following by 25%.
</p>
<div>
<a href=''> my resume</a>
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
                <p>Conducted market research and competitor analysis using SEMrush and SpyFu tools to identify trends and opportunities, resulting in data-driven marketing decisions.
•	Implemented and managed using Hootsuite for schedul</p>
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
                <p>Conducted market research and competitor analysis using SEMrush and SpyFu tools to identify trends and opportunities, resulting in data-driven marketing decisions.
•	Implemented and managed Google  Hootsuite for schedul</p>
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
                <p>Conducted market research and competitor analysis using SEMrush and SpyFu tools to identify trends and opportunities, resulting in data-driven marketing decisions.
•	Implemented and managed Google Ads for schedul</p>
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
                <p>Conducted market research and competitor analysis using SEMrush and SpyFu tools to identify trends and opportunities, resulting in data-driven marketing decisions.
•	Implemented and managed Google Ads  schedul</p>
              </div>
            </div>
            <div className='card'>
              <div className='cardheader'>
                <h3><FaOm></FaOm></h3>
                <h2>vulnerability assesment</h2>
              </div>
              <div className='cardbody'>
                <p>Conducted market research  optimizing keyword targeting and ad copy to achieve a 20% increase in website traffic and conversions.
•	Created and managed social media marketing campaigns, using Hootsuite for schedul</p>
              </div>
            </div>
            <div className='card'>
              <div className='cardheader'>
                <h3><FaLock></FaLock></h3>
                <h2>vulnerability patching</h2>
              </div>
              <div className='cardbody'>
                <p>Conducted market research and competitor analysis using SEMrush and SpyFu tools to identify trends and opportunities, resulting in data-driven marketing decisions.
•	Implemented and managed Google Ads for schedul</p>
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
 
</div>

    </div>
  );
}

export default Dashboard;
