# tinymce-rails-addbutton

Simple plugin for TinyMCE that allows a user to add a button <a href>

## Requirements

* Rails >= 3
* TinyMCE4 using the advanced theme

## Setup

### Add the gem to your Gemfile
    # use git

    gem 'tinymce-rails-addbutton', github: 'innovationfactory/tinymce-rails-addbutton'

### Enable TinyMCE plugin

    in tinymce.yml add:
    plugins: "addbutton"

    in tinymce-custom.js add:
