require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(*Rails.groups)

module WebuiRailsSample
  class Application < Rails::Application
    config.active_record.raise_in_transactional_callbacks = true
    config.assets.enabled = true
    config.assets.paths << Rails.root.join('private')
    config.assets.paths << Rails.root.join('bower_components')
  end
end
