import { Grid } from "@mui/material";
import CottageIcon from '@mui/icons-material/Cottage';
import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import { SONG } from "../../constant";
import "./home.scss";

function Home () {
  return (
    <div>
      <div className="home">
        <Grid container className="grid">
          <Grid item xs={12} md={4}>
            <div className="title">
              <CottageIcon sx={{ fontSize: 100 }} />
            </div>
            <div className="title">Home</div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="content">
              This idea has been in mind for quite a lot of time. So here I'm
              coding my heart out. Ever since I have met you, you have been my
              Home. Don't you crave a hug which could vanish all your problems
              for a while ? Well I crave for it. Pretty hard. I will be
              conveying the best I could, but it wouldn't do justice to express
              what I feel. Long story short, I wanna be with you. I wanna treat
              you right. I wanna love you every day and every night. Life's too
              short to be away from the people we love. So here's the best
              virtual home I could build. Enjoy the stay !!
            </div>
          </Grid>
        </Grid>
        <Grid container className="song">
          <Grid item xs={12} md={4}>
            <div className="video">
              <video src={video1} width="275px" autoplay="true" style={ {'border': '0px dotted white'} } loop="true" />
            </div>
          </Grid>
          <Grid item xs={12} md={8} className="padding-l padding-r">
            <div className="title">The Dance</div>
            <div className="content">
              The best performance of my life ;p .
              All I could see were your eyes. I agree there was a lot of crowd. 
              But for that moment my eyes turned on it's portrait mode and 
              all the focus was on the most beautiful woman ever. These lyrics sums
              it up what I feel everyday. I'll thank Bob Marley later for the lyrics.
            </div>
            <i>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: SONG }}
              ></div>
            </i>
          </Grid>
        </Grid>

        
        <div className="image1">
          <div className="black-layer">
            <div> I caught you smiling :D</div>
          </div>
        </div>
        <div className="image2">
          <div className="black-layer">
            <video id="video2" src={video2} width="300px" autoplay="true" loop="true" />
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;