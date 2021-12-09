import React from 'react';
import {  Grid, Segment} from 'semantic-ui-react';

const Card=(data)=> {
    data.data.sort((a, b) => (a.weight > b.weight) ? 1 : -1);
    return (
        <div>
        <Grid centered columns={3}>
            {data.data.map((a, i)=>{
                
                return (
                    <Grid.Column key={i}>
                        <Segment color="blue">
                                    <strong>Title</strong>
                                    <p>{a.title}</p>
                                    <strong>Description</strong>
                                    <p>{a.description}</p>
                                    <strong>Tags</strong>
                                    <p>{a.tags.map((b, j)=><span key={j}>{b}</span>)}</p>
                                    <strong>Weight</strong>
                                    <p>{a.weight}</p>
                        </Segment>
                    
                    </Grid.Column>
                    )
            })}
            </Grid>
        </div>
    )
}

export default Card;
