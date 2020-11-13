import Link from 'next/link'
import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import {IRoom, ITenantData} from '../interface/Interfaces'
import {ROOMS1st} from '../defaults/restData'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  rootPaper: {
    maxWidth: 345,
    margin: 10,
  },
}));

interface IProps {
  data: IRoom[]
}

export default function RoomCard(props: IProps) {
  const classes = useStyles();

  // const rooms: IRoom[] = ROOMS1st

  const toolTipItem = (tenantData: ITenantData[], account: string) => {
    return (
      <React.Fragment>
        <div style={{display:'inline-block'}}>
          <Typography variant="button" style={{textAlign:'center'}} display="block" gutterBottom>
            {account}
          </Typography>
          {tenantData.map(data => (
            <Typography variant="overline" display="block" gutterBottom>
              {data.bedLetter + ' ' + data.name + ' ' + `(${data.moveOut})`}
            </Typography>
          ))}
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div style={{height:375, width:900, overflow:'scroll'}}>
        <Grid container xs={12}>
        {props.data.map(room => (
        <Grid item xs={2}>
            {room.status === 'vacant' ? (
              <Tooltip title={
                <React.Fragment>
                  <div style={{display:'inline-block'}}>
                    <Typography variant="button" style={{textAlign:'center'}} display="block" gutterBottom>
                      {room.roomAccount}
                    </Typography>
                    <Typography variant="button" style={{textAlign:'center'}} display="block" gutterBottom>
                      No Tenants
                    </Typography>
                  </div>
                </React.Fragment>
              } arrow>
                <Card className={classes.rootPaper} style={{backgroundColor:'#98FB98'}} onClick={() => console.log(room.slug)}>
                  <Link href={room.slug}>
                    <CardActionArea>
                      <CardContent>
                        <div>
                          <Typography variant="overline" display="block" gutterBottom>
                            Unit
                          </Typography>
                          <Typography gutterBottom variant="h5" component="h2">
                              <div style={{textAlign:'center'}}>
                                {room.label}
                              </div>
                          </Typography>
                          <Typography variant="overline" display="block" gutterBottom>
                            Vacant
                          </Typography>
                        </div>
                      </CardContent>
                    </CardActionArea> 
                  </Link>
                </Card>
              </Tooltip>
            ) : (
                <div>
                  {room.status === 'partial' ? (
                      <Tooltip title={toolTipItem(room.data,room.roomAccount)} arrow>
                      <Card className={classes.rootPaper} style={{backgroundColor:'#ADD8E6'}} onClick={() => console.log(room.slug)}>
                        <Link href={room.slug}>
                          <CardActionArea>
                            <CardContent>
                              <div>
                                <Typography variant="overline" display="block" gutterBottom>
                                  Unit
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <div style={{textAlign:'center'}}>
                                      {room.label}
                                    </div>
                                </Typography>
                                <Typography variant="overline" display="block" gutterBottom>
                                  Partial
                                </Typography>
                              </div>
                            </CardContent>
                          </CardActionArea> 
                        </Link>
                      </Card>
                    </Tooltip>
                  ): (
                      <Tooltip title={toolTipItem(room.data,room.roomAccount)} arrow>
                      <Card className={classes.rootPaper} style={{backgroundColor:'#cc99ff'}} onClick={() => console.log(room.slug)}>
                        <Link href={room.slug}>
                          <CardActionArea>
                            <CardContent>
                              <div>
                                <Typography variant="overline" display="block" gutterBottom>
                                  Unit
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <div style={{textAlign:'center'}}>
                                      {room.label}
                                    </div>
                                </Typography>
                                <Typography variant="overline" display="block" gutterBottom>
                                  Occupied
                                </Typography>
                              </div>
                            </CardContent>
                          </CardActionArea> 
                        </Link>
                      </Card>
                    </Tooltip>
                  )}
                </div>
            )}
        </Grid>
      ))}
      </Grid>
      </div>
    </React.Fragment>
  );
}
