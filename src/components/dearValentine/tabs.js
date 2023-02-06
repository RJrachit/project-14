import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Rose" {...a11yProps(0)} />
          <Tab label="Propose" {...a11yProps(1)} disabled/>
          <Tab label="Chocolate" {...a11yProps(2)} disabled/>
          <Tab label="Teddy" {...a11yProps(3)} disabled/>
          <Tab label="Promise" {...a11yProps(4)} disabled/>
          <Tab label="Hug" {...a11yProps(5)} disabled/>
          <Tab label="Kiss" {...a11yProps(6)} disabled/>
          <Tab label="Valentine" {...a11yProps(7)} disabled/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='rose img'>
          <div className='black-layer'>
            <div className='text'>
            The first valentine week of our relationship. You remember the long walk
            we took. Then I opened my bag and took out this little rose. Asked if I should
            bend on my knees and give you this. We celebrated our first rose day then.
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='propose img'>
          <div className='black-layer'>
            <div className='text'>
              Proposal due by 2025. Planning on it :{')'} So the first proposal was
              messy. Kalinga chowk. Why the hell did I talk about IITs before my proposal ?
               You replied 'yes' in my ears. I was flying high.
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className='chocolate img'>
          <div className='black-layer'>
            <div className='text'>
              We have some memories with chocolate :P Another one together? Lodhi Gardens.
              That was some hell of a time there. We ate a full bar. Never knew chocolates tasted
              so good.  
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className='teddy img'>
          <div className='black-layer'>
            <div className='text'>
              Thanks for putting teddy in there. You got the asthetics. I gave the best teddy of 
              your life. 'MYSELF'.  
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className='promise img'>
          <div className='black-layer'>
            <div className='text'>
              Promising again to be there for you always {'<3'} I still remember how pretty were 
              your eyes that 'rainy day' . Glad I didn't told you about my umbrella. Will forget 
              next time also.
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className='hug img'>
          <div className='black-layer'>
            <div className='text'>
              A hug will surely make our day XOXO. But it didn't for the first time :D 
              From akward to best we have come a long way.
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div className='kiss img'>
          <div className='black-layer'>
            <div className='text'>
              This is my favourite task. Yours ?? Not gonna tell the story here ;D
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <div className='v img'>
          <div className='black-layer'>
            <div className='text'>
              You - The Perfect Valentine.
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}