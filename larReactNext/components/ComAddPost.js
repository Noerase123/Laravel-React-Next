import Link from 'next/link';
import React from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function ComAddPost() {

    const classes = useStyles();

    const [title, setTitle] = React.useState('')
    const [desc, setDesc] = React.useState('')

    const addpost = () => {

        const ApiUrl = 'http://localhost:8000/api/post'

        const data = new FormData()
        data.append('title', title)
        data.append('description', desc)

        const header = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        Axios.post(ApiUrl, data, header)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <React.Fragment>

            <h1>Add post</h1>

            <form className={classes.root} noValidate autoComplete="off">

                <TextField
                    id="filled-basic"
                    fullWidth
                    label="Title"
                    variant="filled"
                    onChange={(event) => setTitle(event.target.value)}
                />
                <br /><br />
                <TextField
                    id="filled-basic"
                    fullWidth
                    label="Description"
                    variant="filled"
                    onChange={(event) => setDesc(event.target.value)}
                />
                <br /><br />

                <Link href="/">
                    <Button variant="contained" color="primary" onClick={() => addpost()}>
                        Add Post
                    </Button>
                </Link>
            </form>



        </React.Fragment>
    )
}