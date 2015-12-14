# atomic-base-css | includes

Less imports that are meant to be added to other less stylesheets (ex. variables, mixins, functions, etc.)
NOTE: do not add any style definitions to these files.

Example: 

// These stylesheet definition should be here:
@black: #000000;
@list-width: 300px;
.opacity (@opacity: 0.5) { }

// This stylesheet definition should be in the utilities directory:
.txt-red {}
