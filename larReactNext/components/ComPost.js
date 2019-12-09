import React from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function ComPost() {
    const classes = useStyles();

    const [post, setPost] = React.useState([])
    const [comments, setComments] = React.useState([])

    const [addcomm, setAddcomm] = React.useState('')

    const api = 'http://localhost:8000/api/'

    React.useEffect(() => {

        var urlParams = new URLSearchParams(window.location.search);

        let param = urlParams.get('getId');

        Axios.get(api + 'post/' + param)
            .then(res => {
                // console.log(res.data.data)
                setPost(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })

        Axios.get(api + 'comments/viewPost/' + param)
            .then(res => {
                console.log(res.data.get_data)
                setComments(res.data.get_data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const addComment = () => {

        var urlParams = new URLSearchParams(window.location.search);

        let param = urlParams.get('getId');

        const data = {
            'comment': addcomm
        }

        Axios.post(api + 'comments/addComment/' + param,data)
            .then(res => {
                console.log(res)
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <React.Fragment>
            <br/>

            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {post.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <TextField
                        id="standard-basic"
                        label="Add comment..."
                        variant="filled"
                        fullWidth
                        onChange={(event) => setAddcomm(event.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={() => addComment()}>
                        Comment
                    </Button>
                </CardActions>

                {comments.map(com => (
                    <Paper>
                        <Typography style={commentStyle} component="p">
                            {com.comment}
                        </Typography>
                    </Paper>
                ))}

            </Card>
        </React.Fragment>
    )
}

const commentStyle = {
    marginLeft: '50px'
}