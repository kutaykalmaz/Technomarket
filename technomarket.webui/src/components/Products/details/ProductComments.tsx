import React from 'react'
import { Tab, Comment, Form, Button } from 'semantic-ui-react'

const ProductComments = () => {
    return (
        <Tab.Pane>
            <Comment.Group threaded>
                <Comment>
                    <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'>Matt</Comment.Author>
                        <Comment.Metadata>
                            <span>Today at 5:42PM</span>
                        </Comment.Metadata>
                        <Comment.Text>How artistic!</Comment.Text>
                        <Comment.Actions>
                            <div style={{ color: 'rgba(0,0,0,.4)' }}>Reply</div>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>

                <Comment>
                    <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'>Elliot Fu</Comment.Author>
                        <Comment.Metadata>
                            <span>Yesterday at 12:30AM</span>
                        </Comment.Metadata>
                        <Comment.Text>
                            <p>This has been very useful for my research. Thanks as well!</p>
                        </Comment.Text>
                        <Comment.Actions>
                            <div style={{ color: 'rgba(0,0,0,.4)' }}>Reply</div>
                        </Comment.Actions>
                    </Comment.Content>

                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                <Comment.Metadata>
                                    <span>Just now</span>
                                </Comment.Metadata>
                                <Comment.Text>Elliot you are always so right :)</Comment.Text>
                                <Comment.Actions>
                                    <div style={{ color: 'rgba(0,0,0,.4)' }}>Reply</div>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                </Comment>

                <Comment>
                    <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'>Joe Henderson</Comment.Author>
                        <Comment.Metadata>
                            <span>5 days ago</span>
                        </Comment.Metadata>
                        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                        <Comment.Actions>
                            <div style={{ color: 'rgba(0,0,0,.4)' }}>Reply</div>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>

                <Form reply>
                    <Form.TextArea />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                </Form>
            </Comment.Group>

        </Tab.Pane>
    )
}

export default ProductComments
