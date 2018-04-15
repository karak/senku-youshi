<command-bar>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <button ref="shuffleButton" class="button is-outlined" onclick={ shuffleButtonClick }>並べ替え</button>
      </div>
      <div class="navbar-item">
        <button ref="copyButton" class="button is-primary" onclick={ copyButtonClick }>クリップボードにコピー</button>
      </div>
    </div>
    <div class="navbar-menu">
    </div>
  </nav>
  <script>
  shuffleButtonClick() {
    this.trigger('shuffle');
  }

  copyButtonClick() {
    this.trigger('copy');
  }
  </script>
</command-bar>
