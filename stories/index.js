import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { DropboxChooser }from '../src'
import Button  from './Button/Button' 

const DROPBOX_APP_KEY = '79gsvn2zv9y498u'
storiesOf('Chooser Buttons', module)
  .add('with Dropbox', () => (
    <div className="container">
      <DropboxChooser appKey={DROPBOX_APP_KEY}
                      success={files => console.log('chose:', files)}
                      cancel={() => console.log('closed')}
                      extensions = {[]}
                      multiselect={true} >
        <Button className="dropbox-button">Choose from Dropbox</Button>
      </DropboxChooser>
    </div>
  ))
  .add('with Google Drive', () => (
    <Button onClick={action('clicked')}>💯 to be continued...</Button>
  ))
  .add('with One Drive', () => (
    <Button onClick={action('clicked')}>💯 to be continued...</Button>
  ))
