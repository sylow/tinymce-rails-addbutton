module Tinymce
  module Rails
    module Addbutton
      class Engine < ::Rails::Engine
        initializer 'TinymceRailsAddbutton.assets_pipeline' do |app|
          app.config.assets.precompile << "tinymce/plugins/addbutton/*"
        end
      end
    end
  end
end
