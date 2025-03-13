function previewPDF() {
    let fileInput = document.getElementById('pdfUpload');
    let previewDiv = document.getElementById('pdfPreview');

    if (fileInput.files.length > 0) {
        let file = fileInput.files[0];
        let fileURL = URL.createObjectURL(file);
        previewDiv.innerHTML = `<iframe src="${fileURL}" width="100%" height="400px"></iframe>`;
    } else {
        alert("Please select a PDF to preview.");
    }
}