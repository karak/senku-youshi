<senku-app>
  <command-bar ref="commandBar" />
  <controlled-textarea ref="editor" />
  <script>
  import './controlled-textarea.tag';
  import './command-bar.tag';
  import normalizeList from '../models/normalizeList';
  import shuffle from '../models/shuffle';

  this.editorValue = '';
  this.on('mount', () => {
    this.refs.editor.on('change', ({ value }) => {
      this.refs.editor.value = normalizeList(value);
    });

    this.refs.commandBar.on('shuffle', () => {
      this.refs.editor.value = shuffle(this.refs.editor.value);
    });
  });
  </script>
</senku-app>
