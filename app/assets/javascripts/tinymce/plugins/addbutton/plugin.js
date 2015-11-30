(function() {

    tinymce.PluginManager.add('addbutton', function(editor, url) {

      function showDialog() {
        win = editor.windowManager.open({
          title: 'Insert a button',
          body: [
             {type: 'textbox', name: 'title', label: 'Title'},
             {type: 'textbox', name: 'url', label: 'Url', tooltip: "http://...", value: "http://..." },
             {type: 'listbox', name: 'target', label: 'Target', values: [
              {text: 'none', value: 'none'},
              {text: 'new window', value: 'new_window'}
             ]},
             {type: 'container', classes: 'error', html: "<p class='addbutton-error' style='color: #b94a48;'>&nbsp;</p>"},
          ],
          buttons: [{
              text: 'Add',
              onclick: function(e){
                title_input = $( "label.mce-widget:contains('Title')" ).next().val();
                url_input = $( "label.mce-widget:contains('Url')" ).next().val();
                target_text = $.trim( $( "label.mce-widget:contains('Target')" ).next().children().text() )
                console.log("target_text", target_text)

                  if(target_text == "none"){
                    target_input = ""
                  } else {
                    target_input = "target='_BLANK'"
                  }

                tinymce_error = $(".addbutton-error")

                if (title_input == ""){
                  tinymce_error.text("You must choose a title")
                } else if ((url_input == "") || (url_input == "http://...")){
                  tinymce_error.text("You must choose a url other than the example 'http://...' ")
                } else {
                    tinymce_error.text(" ")
                    editor.insertContent('<a '+ target_input +' href="'+ url_input +'" class="btn btn-primary button-link alt">'+ title_input +'</a>');
                    editor.windowManager.close();
                }
              },
              subtype: 'primary'
            }]
        });
      }
      // Add a button that opens a window
      editor.addButton('addbutton', {
        tooltip: 'Insert a button',
        icon : 'editimage',
        onclick: showDialog
      });
  });

})();
