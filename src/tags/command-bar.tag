<command-bar>
  <button ref="shuffleButton" onclick={ shuffleButtonClick }>並べ替え</button>
  <script>
  shuffleButtonClick() {
    this.trigger('shuffle');
  }
  </script>
</command-bar>
