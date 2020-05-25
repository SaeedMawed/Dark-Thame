function showImgForm() {
    var edit = document.getElementById("edit-photo");
    var upload = document.getElementById("upload-photo");
    edit.style.display = 'none';
    upload.style.display = 'block';
}

function hideImgForm() {
    var edit = document.getElementById("edit-photo");
    var upload = document.getElementById("upload-photo");
    edit.style.display = 'block';
    upload.style.display = 'none';
}

function showEditPasswordForm() {
    var edit = document.getElementById("edit-password");
    var upload = document.getElementById("newPasswordForm");
    edit.style.display = 'none';
    upload.style.display = 'block';
}

function hideEditPasswordForm() {
    var edit = document.getElementById("edit-password");
    var upload = document.getElementById("newPasswordForm");
    edit.style.display = 'block';
    upload.style.display = 'none';
}