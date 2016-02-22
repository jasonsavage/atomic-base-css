# application (components)

Styles that are NOT global but custom to a specific component in the application. These cutom styles should be able to be
removed and added without effecting any other parts of the application.

NOTE: I recommend placing these styles can be in the same directory as the component they are attached to

Example:

**These stylesheet definition should be here:**

.game-mode-overview { } -> GameModeOverview.js

.account-level-widget { } -> AccountLevelWidget.js

**This stylesheet definition should be in the components directory:**

.tabs { }

.play-game-button { }

.callout-large { }
