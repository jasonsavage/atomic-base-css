# components

Styles that are global and ar generally used as base classes. For example, tabs can be used through out the application
and generally look the same, but if in a certain component tabs are customized then add that customization to a file
under the applications directory and use tabs as a base class.

Example:

// These stylesheet definition should be here:
.tabs { }
.button { }
.button.primary { }

// This stylesheet definition should be in the application directory:
#lobby-players-list > .tabs { }
#play-game-button > .button.primary { }
