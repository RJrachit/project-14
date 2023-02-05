
import EmailIcon from "@mui/icons-material/Email";
import images from "./constants";
import { Grid } from "@mui/material";
import "./letter.scss";
import { useState } from "react";
import { blue } from "@mui/material/colors";

function Image (props) {
  const [expanded,setExpanded] = useState(false);
  return (
    <span className="img-contain"
      onClick={() => setExpanded(!expanded)}>
      <img src={props.image} className={expanded ? "expanded" : "" } />
      {/* <span className="filter"></span> */}
    </span>
  );
}

function Letter () {
  return (
    <>
      <div className="letter">
        <Grid container className="grid">
          <Grid item xs={12} md={4}>
            <div className="title">
              <EmailIcon sx={{ fontSize: 100, color: blue[500] }} />
            </div>
            <div className="title">Letter</div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="content">
              Love stories are incomplete without love letters. Heer-Ranjha,
              Veer-Zaara, Romeo-Juliet: What do they have in common ? Male,
              female and love letters. This digital age has hindered my writing
              abilities, but enchanced my typing abilities. For a long we have
              been sending our sweet bitter messages. Here are the chosen and
              available few. I will write lots of them from now I promise. The
              sweet messages for the sweetest ones.
            </div>
          </Grid>
        </Grid>

        <div className="my-letter-cont">
          <div className="black-layer"> 
            <div className="my-letter">
              Dear Jasleen, <br />
              <br />
              Hey cutie ! How are you ? It's been so long since I saw you. I
              miss your face. I know that I'm the worst possible boyfreind. I
              trouble you and I fight the most. But with great obsessions comes
              overpossesive boyfreind. <br />
              <br />
              I want to remind you that I'm always there. I'll be there to
              listen. You can scold me too. Love it when you scold me. Makes me
              a better person. You know what everything you do I love it. Keep
              scolding me always. You are my blanket when I feel cold. <br />
              <br />
              What is love ? I think it is with you. Cause when you are with me
              you are the all I need. You are the one I pray for. You are the
              one I want feel responsible for. I want to take care of you. The
              one person I could go for any lengths {"(even kilometers ;p)"}. I
              don't ask God anything. But I'm too scared of loosing you. I ask
              you from God now. I don't even know where and how to pray. I just
              pray. <br />
              <br />
              You do kill me by your looks. Ooooh lala ! Your Goa pics. My God
              !! Are you kidding me. Whatttttt !!!??? You look fantabulously
              extremely gorgeous {"<3 <3."} Those eyes. They are deeper than the
              ocean. And your lipss. Bruh ! Those are the biggest distracters. I
              mean they look so kissable everytime. Kiss me soon.
              <br />
              <br />
              So, I have not said many things cause my eyes do the talking. But
              I hope to see you soon. I miss you soo much. I love you.
              <br />
              <br />
              Rachit
            </div>
          </div>
        </div>

        <div className="letter-content">
          {Object.keys(images).map((key, index) => (
            <>
              {/* <img src={`./assets/${index+1}.jpg`}/> */}
              <Image image={images[key]} />
            </>
          ))}
        </div>
        
      </div>
    </>
  );
}

export default Letter;