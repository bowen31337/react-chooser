React chooser 
============

This is a react chooser suites for the following storage providers

- Dropbox [Dropbox Chooser API](https://www.dropbox.com/developers/chooser)
- Google Drive (TBC)
- One Drive (TBC)

Installation 
============
```bash
yarn add react-chooser

```

Usage
=====
```js

import { DropboxChooser } from 'react-chooser'

<DropboxChooser 
    appKey={'appkey'}
    success={files => this.onSuccess(files)}
    cancel={this.onCancel}
    multiselect={true}
    extensions={['.pdf','.doc']} >
</DropboxChooser>

```

StoryBook UI Testing 
====
```bash
npm run storybook

open http://localhost:6006
```


