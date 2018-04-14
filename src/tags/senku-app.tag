<senku-app>
  <controlled-textarea ref="editor" />
  <script>
  import './controlled-textarea.tag';
  import normalizeList from '../models/normalizeList';

  this.editorValue = '';
  this.on('mount', () => {
    this.refs.editor.on('change', ({ value }) => {
      this.refs.editor.value = normalizeList(value);
    });
  });
  </script>
</senku-app>
