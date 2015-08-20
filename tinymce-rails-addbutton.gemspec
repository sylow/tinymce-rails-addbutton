# encoding: utf-8
$:.push File.expand_path("../lib", __FILE__)
require "tinymce-rails-addbutton/version"

Gem::Specification.new do |s|
  s.name        = "tinymce-rails-addbutton"
  s.version     = Tinymce::Rails::Addbutton::VERSION
  s.authors     = ["Tom Hoenderdos"]
  s.email       = ["tom.hoenderdos@innovationfactory.eu"]
  s.homepage    = "http://innovationfactory.eu"
  s.summary     = %q{TinyMCE plugin for adding a button in Rails >= 3.2}
  s.description = %q{TinyMCE plugin for adding a standard <a href button in Rails >= 3.2 together with tinymce-rails gem}

  s.files         = [Dir["app/assets/javascripts/tinymce/plugins/addbutton/**/*.js"],
                     Dir["lib/**/*.rb"],
                     "lib/tasks/tinymce-addbutton-assets.rake",
                     "README.md",
                    ].flatten
  s.test_files    = []
  s.require_paths = ["lib"]

  s.add_runtime_dependency     "railties",      ">= 3.2", "< 5"
  s.add_runtime_dependency     "tinymce-rails", "~> 4.0"
  s.add_development_dependency "bundler",       "~> 1.0"
  s.add_development_dependency "rails",         ">= 3.1"
end
