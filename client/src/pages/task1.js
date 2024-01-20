import Navbar from "../components/Navbar";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Carousel from "../components/carousel";
import Grid from '@mui/material/Grid';
import aboutMe from "../assets/aboutMe.png"
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Task1 = () => {
  return (
    <>
        <Navbar></Navbar>
        <Grid container spacing={2} direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={12}  >
                <Carousel></Carousel>
            </Grid>
      </Grid>

      <Grid container spacing={5} >
            <Grid item xs={6}>
                <Item><h2 style={{color:'#D33737'}}> About Me</h2>
                    <p> <b>I Am</b>  Shivam Dargan, Based in New Delhi, India And Have Been Living There Since I Was Born.<br/>
                        A Full Stack Web Developer And I Have Worked On Multiple Projects Using Multiple Technologies Like MERN, PERN Stacks. <br/>
                        <b>I Am</b>  Constantly Pushing Myself To The Boundaries And Out Of My Comfort Zone, Striving To Better Myself Every Day One Step At Time. <br/>
                        <b>I Am</b>  a Hard Working, Perseverant Individual Fueled With Passion And Motivation.<br/>
                        <b>I Am</b> Value Time Greatly And Thus, Meeting Deadlines While Still Producing Quality Work Is Something That Comes Natural To Me.</p>
                        <br></br>
                        <br></br>
                        I Enjoy Watching Motorsports, Particularly Formula 1, So If You Ever Want To Discuss F1 Hit Me Up!<br/>
                        I Am A Fitness Enthusiast And Enjoy Training Heavy And Pushing My Limits.<br/>
                        I Am A Big Tech Geek, Always Looking Forward To Get Hands On The Lastest Gadgets That Release<br/>
                        To Know More About Me, Click <a href = "https://shivamdargan.netlify.app/" style={{textDecoration:"none","color":"red"}}>Here</a>

                </Item>
            </Grid>
            <Grid item xs={6}>
                    <img src = {aboutMe} alt = "aboutMe" style={{maxWidth:"700px", maxHeight:"700px"}}></img>
            </Grid>
      </Grid>
    </>
  )
};

export default Task1;