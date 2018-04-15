<senku-app>
  <command-bar ref="commandBar" />
  <controlled-textarea ref="editor" />
  <script>
  import './controlled-textarea.tag';
  import './command-bar.tag';
  import { WorkList, clipboard } from '../models';

  this.on('mount', () => {
    const workList = new WorkList(this.refs.editor);

    this.refs.editor.on('change', ({ value }) => {
      workList.normalize();
    });

    this.refs.commandBar.on('shuffle', () => {
      workList.shuffle();
    });

    this.refs.commandBar.on('copy', () => {
      clipboard.paste(this.refs.editor.value);
    });
  });
  </script>
</senku-app>
