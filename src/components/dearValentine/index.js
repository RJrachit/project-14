
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Grid } from "@mui/material";
import { red } from "@mui/material/colors";
import "./valentine.scss";
import VerticalTabs from "./tabs";


function DearValentine () {
  return (
    <>
      <div className="valentine">
        <Grid container className="grid">
          <Grid item xs={12} md={4}>
            <div className="title">
              <FavoriteIcon sx={{ fontSize: 100, color: red[500] }} />
            </div>
            <div className="title">Valentine</div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="content">
              It's Valentine baby!!! When will be our first valentine together {':('} 
              As I complete this last component it marks the beggening of 7 Feb 2023. For the next 
              8 days each of the tabs will open so keep track. Each tab has our story. Read them 
              thoroughly as I might ask questions. JK you have given enough exams already in btech.
            </div>
          </Grid>
        </Grid>

        <VerticalTabs />
      </div>
    </>
  );
}

export default DearValentine;