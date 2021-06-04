import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/index.css'

import Index from './pages/index'
import Video from './pages/video/video'
import Workplace from './pages/workpace/Workplace'
function a() {
  return (

    <Router>

      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li> <Link to="/">博客首页</Link> </li>
            <li><Link to="/video/">视频教程</Link> </li>
            <li><Link to="/workplace">职场技能</Link> </li>
          </ul>
        </div>

   
     
        <div className="rightMain">

          <Route path="/" exact component={Index}></Route>
          <Route path="/video/" component={Video}></Route>
          <Route path="/workplace/" component={Workplace} />

          
          
        </div>
      </div>



    </Router>
  );
}

export default a;
