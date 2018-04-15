<command-bar>
  <button ref="shuffleButton" onclick={ shuffleButtonClick }>並べ替え</button>
  <button ref="copyButton" onclick={ copyButtonClick }>クリップボードにコピー</button>
  <script>
  shuffleButtonClick() {
    this.trigger('shuffle');
  }

  copyButtonClick() {
    this.trigger('copy');
  }
  </script>
</command-bar>
