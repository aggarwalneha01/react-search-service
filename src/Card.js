import React from 'react';
import {  Grid, Card as C } from 'semantic-ui-react';

const Card=(data)=> {
    return (
        <div>
        <Grid centered columns={3}>
            {data.data.map((a, i)=>{
                
                return (
                    <Grid.Column key={i}>
                        <C>
                            <C.Content>
                                
                                    <strong>Title</strong>
                                    <p>{a.title}</p>
                                    <strong>Description</strong>
                                    <p>{a.description}</p>
                                    <strong>Weight</strong>
                                    <p>{a.weight}</p>
                                    <strong>Tags</strong>
                                    <p>{a.tags.map((b)=><p>{b}</p>)}</p>
                                    
                               
                            </C.Content>
                        </C>
                    
                    </Grid.Column>
                    )
            }
            )
            }
            </Grid>
        </div>
    )
}

export default Card;
