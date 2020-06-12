### Pa nursing home staffing - slider map
Embeddable map that lets users explore where the best-staffed nursing homes are located in Pennsylvania using a slider. Built with React.

View: [Live project](https://interactives.data.spotlightpa.org/2020/pa-nursing-home-staffing/). 

[Parcel.js](https://github.com/parcel-bundler/parcel) is used to bundle the source files.

### Install

To install, clone this repo and cd into the project folder.

Now enter the following command:

```npm install```

To run dev server, enter:

```npm run start```

You should be able to view the project at localhost:1234

#### About Pym
This widget is designed to be embedded as an iframe. It uses [pym.js](https://github.com/nprapps/pym.js/) to resize the iframe's height as needed.

To embed this widget and take advantage of pym, your embed code should look something like this:

```
<!-- START responsive iframe -->
<div id="container"></div>
<script src="https://pym.nprapps.org/pym.v1.min.js"></script>
<script>new pym.Parent('container', 'https://interactives.data.spotlightpa.org/2020/pa-nursing-home-staffing/', {});</script>
<!-- END responsive iframe -->
```
