import Link from "next/link";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from "axios";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ComIndex() {
    const classes = useStyles();

    const [post, setPost] = React.useState([])

    //add post

    const [title, setTitle] = React.useState('')
    const [desc, setDesc] = React.useState('')

    const [del, setDel] = React.useState('')

    let ApiUrl = 'http://127.0.0.1:8000/'

    React.useEffect(() => {

        Axios.get(ApiUrl + 'api/post')
            .then(res => {
                console.log(res.data.data)
                setPost(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const deletePost = (id) => {

        Axios.delete(ApiUrl + 'api/delete/' + id)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <React.Fragment>
            <h1>Index page</h1>

            <Paper className={classes.root}>

                <Link href="/addPost">
                    <Button variant="contained" color="primary">
                        Add Post
                </Button>
                </Link>

                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Methods</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {post.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right"><Link href={'/post?getId=' + row.id}><a>{row.title}</a></Link></TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" color="secondary" onClick={() => deletePost(row.id)}>
                                        Delete Post
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </React.Fragment>
    )
}
