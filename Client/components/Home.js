import Link from 'next/link';
import React from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    formControl: {
        marginTop: '-16px',
        minWidth: 100,
    },
}));

export default function Home() {

    const classes = useStyles();

    const [openGender, setOpenGender] = React.useState(false);
    
    const handleClose = () => {
        setOpenGender(false);
    };

    const handleOpen = () => {
        setOpenGender(true);
    };

    const [openGender1, setOpenGender1] = React.useState(false);
    
    const handleClose1 = () => {
        setOpenGender1(false);
    };

    const handleOpen1 = () => {
        setOpenGender1(true);
    };

    const [userID, setUserID] = React.useState(0)
    const [time, setTime] = React.useState('')
    const [bookingDate, setBookingDate] = React.useState('')
    const [replicate, setReplicate] = React.useState('')

    const addpost = () => {

        const ApiUrl = 'https://mytown-app.com/api/cleaning_test'

        const data = new FormData()
        data.append('userID', userID)
        data.append('time', time)
        data.append('bookingDate', bookingDate)
        data.append('replicate', replicate)

        const header = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        if (userID == '' || time == '' || bookingDate == '' || replicate == '') {
            alert('fill up the blanks')
        }
        else {

            Axios.post(ApiUrl, data, header)
            .then(res => {
                console.log(res)
                alert(res);
                setTimeout(() => {
                    location.reload()
                }, 1000);
            })
            .catch(err => {
                console.log(err)
                alert('success');
                setTimeout(() => {
                    location.reload();
                }, 1000);
            })
        }

    }

    return (
        <React.Fragment>

            <h1>Add 2x 4x to book cleaning</h1>

            <form className={classes.root} noValidate autoComplete="off">

                <h4>User ID</h4>
                <TextField
                    id="filled-basic"
                    label="User ID"
                    type="number"
                    variant="filled"
                    onChange={(event) => setUserID(event.target.value)}
                />
                <br /><br />
                
                <h4>Time</h4>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Select Time</InputLabel>
                    <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={openGender}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={time}
                    // fullWidth
                    onChange={event => setTime(event.target.value)}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'8:00 am - 12:00 pm'}>8:00 am - 12:00 pm</MenuItem>
                    <MenuItem value={'1:00 pm - 5:00 pm'}>1:00 pm - 5:00 pm</MenuItem>
                    </Select>
                </FormControl>
                <br /><br />
                
                <h4>Booking Date</h4>
                <TextField
                    id="filled-basic"
                    type="date"
                    variant="filled"
                    onChange={(event) => setBookingDate(event.target.value)}
                />
                <br /><br />
                
                <h4>Schedule Replicates</h4>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Select Replicate</InputLabel>
                    <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={openGender1}
                    onClose={handleClose1}
                    onOpen={handleOpen1}
                    value={replicate}
                    // fullWidth
                    onChange={event => setReplicate(event.target.value)}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'2x'}>2x</MenuItem>
                    <MenuItem value={'4x'}>4x</MenuItem>
                    </Select>
                </FormControl>
                <br /><br />

                <Link href="/">
                    <Button variant="contained" color="primary" onClick={() => addpost()}>
                        Book to Cleaning Calendar
                    </Button>
                </Link>
            </form>



        </React.Fragment>
    )

}

const btnStyle = {
    width: '100%'
  }