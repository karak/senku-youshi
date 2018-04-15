<controlled-textarea>
  <textarea class="textarea" ref="textarea" onInput={input} value={ opts.defaultValue || '' } rows="20" 
            placeholder="句を改行区切りで貼り付けてください。"/>
  <script>
  import defineTextareaProperty from './helpers/defineTextareaProperty';

  /** define this.value connecting with textarea.value */
  defineTextareaProperty(this, 'value', this.refs.textrea);

  /** "oninput" event handler of textarea */
  input(e) {
    const value = e.target.value;
    this.trigger('change', { value });
  }
  </script>
</controlled-textarea>
