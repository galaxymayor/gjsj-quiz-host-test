function update_title() {
    const title = document.getElementById('title-input').value;
    document.getElementById('title-text').innerHTML = title;
    document.title = title;
}
function update_title_font_size() {
    const h1_size = document.getElementById('h1-size-input').value + 'pt';
    document.querySelectorAll('h1').forEach((elem) => elem.style.fontSize = h1_size);
}
function update_text_font_size() {
    const font_size = document.getElementById('font-size-input').value + 'pt';
    document.querySelectorAll('p').forEach((elem) => elem.style.fontSize = font_size);
    document.querySelectorAll('.normal-text').forEach((elem) => elem.style.fontSize = font_size);
    document.querySelectorAll('.option-list').forEach((elem) => elem.style.fontSize = font_size);
}
function update_hint_box_width() {
    const box_width = document.getElementById('box-width-input').value + 'px';
    document.querySelectorAll('.box > *').forEach((elem) => elem.style.width = box_width);
}
function set_page_break(input_id, out_div_id) {
    const quantity = document.getElementById(input_id).value;
    let inner = '<div class="pagebreak"></div><div class="no-print">Page Break</div><pre> </pre>'
        .repeat(quantity);
    if (inner.endsWith('<pre> </pre>')) {
        inner = inner.substring(0, inner.length - 12);
    }
    document.getElementById(out_div_id).innerHTML = inner;
}
function set_visible(input_id, result_id) {
    const visibility = document.getElementById(input_id).checked;
    console.log(visibility);
    document.getElementById(result_id).style.display = visibility ? 'contents' : 'none';
}
