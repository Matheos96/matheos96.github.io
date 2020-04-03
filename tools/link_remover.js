const a_start_regex = /<a[^>]*>/g;
const a_close = /<\/a>/g;
const button_regex = /<input[^>]*type="button"[^>]*>/g;

const remove = () => {
    textarea = document.getElementById('textarea');
    content = textarea.value.replace(a_start_regex, '').replace(a_close, '').replace(button_regex, '');
    textarea.value = content;
};