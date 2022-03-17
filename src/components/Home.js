import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormControl from '@mui/material/FormControl';
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import { fetchAlbums } from '../redux/albums/albumActions';
import { fetchAlbumsID } from '../redux';

const useStyles = makeStyles((theme) => ({
    input: {
        background: "rgb(238,229,255)",
        color: '#7f3dff',
        margin: 5,
        fontSize: '0.9rem',
        padding: 10,
        height: 40,
        borderRadius: 5,
        border: 'none',
        disableUnderline: true
    },
    align: {
        textAlign: 'left'
    },
    right: {
        display: 'flex',
        justifyContent: 'end'
    },
    image: {
        height: 42,
        margin: 7
    },
    red: {
        color: 'red'
    },
    green: {
        color: 'green'
    },
    link: {
        color: 'gray',
        fontSize: '0.8rem',
        fontWeight: '500'
    }

}));


const Home = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('')
    const dispatch = useDispatch();
    const albums = useSelector(state => state.reducer.data)
    const albumId = useSelector(state => state.albumIDReducer.data)


    useEffect(() => {


        const fetchData = async () => {
            dispatch(fetchAlbums())
            dispatch(fetchAlbumsID())

            // console.log(albums);
            albumId.forEach(album => {
                // setList()
                album.list = albums.filter(p => p.albumId === album.id).slice(0, 10)

                album.list.forEach(item => {
                    const randomNo = Math.floor(Math.random() * (250 - 50 + 1)) + 50;
                    item.randomNo = randomNo
                })
            }
            )

            setData(albumId)
            // console.log(albumId);
        }
        fetchData()


    }, [albums, albumId])

    const handleChange = e => {
        const { value } = e.target;
        setSearchInput(value)
    }
    // console.log(data);


    return (<>
        <Container maxWidth="lg">
            <FormControl fullWidth sx={{
                mt: 2
            }} variant='standard'>

                <TextField

                    fullWidth
                    // InputProps={}
                    InputProps={{ className: classes.input, disableUnderline: true }}
                    id="standard-adornment-amount"
                    placeholder='See your financial reports'
                    value={searchInput}
                    onChange={e => handleChange(e)}
                // startAdornment={<InputAdornment position="start">See your financial reports</InputAdornment>}
                />
            </FormControl>

            {data?.slice(0, 5).map((item) => {

                return <div key={item.id}>

                    <h3 className={classes.align}>{item?.list.filter(user => user.title.toLowerCase().includes(searchInput)).length > 0 && item.title}</h3>
                    <Box >

                        {item?.list.filter(user => user.title.toLowerCase().includes(searchInput)).map(item =>
                            <div key={item.id}>

                                <Grid container className={classes.align}>
                                    <Grid item xs={0}><img className={classes.image} src={item.url} alt="" /></Grid>
                                    <Grid item xs={9} md={10} sm={9} lg={10}> {item.title}
                                        <br />
                                        <small ><a href={item.url} className={classes.link}>{item.url}</a></small>
                                    </Grid>
                                    <Grid item xs={1} className={classes.right}>
                                        <div>
                                            <span className={item.randomNo > 75 ? classes.green : classes.red}>${item.randomNo}</span>
                                            <br />
                                            <small> 10:00 am</small>
                                        </div>
                                    </Grid>
                                </Grid>

                            </div>)}

                    </Box>


                </div>
            })}

        </Container>

    </>
    )
}

export default Home