<controlled-textarea>
  <textarea ref="textarea" onInput={input} value={ value } rows="8"/>
  <style scoped>
  controlled-textarea textarea {
    width: 100%;
  }
  </style>
  <script>

  /* define "value" accessor connecting with textarea */
  Object.defineProperty(this, 'value', {
    enumerable: true,
    configurable: true,
    set: function (value) {
      this.refs.textarea.value = value;
    },
    get: function () {
      return this.refs.textarea.value;
    }
  });

  /** "mount" event handler */
  this.on('mount', () => {
    const { defaultValue } = this.opts;
    this.value = defaultValue || '';
  });

  /** "oninput" event handler of textarea */
  input(e) {
    const value = e.target.value;
    this.trigger('change', { value });
  }
  </script>
</controlled-textarea>
