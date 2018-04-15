/**
 * define property connecting with value of textarea
 *
 * @param {object} target target object
 * @param {string} name property name
 * @param {HTMLTextareaAlement} textarea textarea whose value is to connect with
 */
export default function defineTextareaProperty(target, name, textarea) {
  // define "value" accessor connecting with textarea
  Object.defineProperty(target, 'value', {
    enumerable: true,
    configurable: true,
    set: function(value) {
      this.refs.textarea.value = value;
    },
    get: function() {
      return this.refs.textarea.value;
    },
  });
}
