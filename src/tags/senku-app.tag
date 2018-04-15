<senku-app>
  <command-bar ref="commandBar" />
  <controlled-textarea ref="editor" />
  <script>
  import './controlled-textarea.tag';
  import './command-bar.tag';
  import { WorkList, clipboard } from '../models';

  this.on('mount', () => {
    const { commandBar, editor} = this.refs;
    const workList = new WorkList(editor);

    editor.on('change', ({ value }) => {
      workList.normalize();
    });

    commandBar.on('shuffle', () => {
      workList.shuffle();
    });

    commandBar.on('copy', () => {
      clipboard.paste(editor.value);
    });
  });
  </script>
</senku-app>
