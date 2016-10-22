Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile = %w(
    startapp.js.erb
    babel-helpers.js
    webui/engine/js/*.js
    framework.js
    core.js
    theme.js
    theme.scss
)
