//exception.js
let fname = document.getElementById('selectFile');

let data = '';
try {

    const reader = new FileReader();
    reader.addEventListener('load', function () {
        data = reader.result;
        console.log('파일내용: ' + data);
    }) //이벤트를 등록하는 메소드.
    reader.addEventListener('error', function () {
        throw '파일 읽기 에러';
    })
    fname.addEventListener('change', function () {
        reader.readAsText(fname.files[0], 'utf-8');
    })

} catch (err) {
    console.log(err.message);
    console.log('정상진행.');

}