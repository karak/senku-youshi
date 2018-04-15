<controlled-textarea>
  <textarea class="textarea" ref="textarea" onInput={input} value={ opts.defaultValue || '' } rows="20" 
            placeholder="句を改行区切りで貼り付けてください。"/>
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

  /** "oninput" event handler of textarea */
  input(e) {
    const value = e.target.value;
    this.trigger('change', { value });
  }
  </script>
</controlled-textarea>
