import { Grid } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import "./memories.scss";
import { PropaneSharp } from "@mui/icons-material";
function Memories (props) {
  return (
    <>
      <div className="memories">
        <Grid container className="grid">
          <Grid item xs={12} md={4}>
            <div className="title">
              <EmojiEmotionsIcon sx={{ fontSize: 100 }} />
            </div>
            <div className="title">Memories</div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="content">
              It's been more than 5 years... Pheww ! The time flies. 14th
              September 2017 still feels like yesterday. 'Yeh ek Zindagi Kaafi
              nhi Hai' with you. This has got to be my favourite part of
              development. Blushing heavily with each and every image upload
              here. So this component will be connected via Github so you can
              update it too. So, here will be our favourite memories. I know
              that we meet after long long long long lo..... breaks. But we have
              the time of our lives when we do. So here are the precious
              memories with the precious one.
            </div>
          </Grid>
        </Grid>

        <div className="content">
          {props.data && props.data.map((res) => 
            <div className="card">
              <Grid container>
                <Grid item xs={12} md={4} className="image">
                  <img src={res.url} />
                </Grid>
                <Grid item xs={12} md={8} className="description">
                  <div>
                    <div className="head">
                      <div className="title">{res.title}</div>
                      <div className="date">{res.date}</div>
                      <div className="place">{res.place}</div>
                    </div>
                    <div className="card-content"> {res.description}</div>
                  </div>
                </Grid>
              </Grid>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Memories;