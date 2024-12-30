
function showResult() {
    var htmlContent = document.getElementById("htmlInput").value;
    var cssContent = document.getElementById("cssInput").value;
    var jsContent = document.getElementById("jsInput").value;
    var iframe = document.getElementById("output");
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(`
        <html>
            <head>
                <style>${cssContent}</style>
            </head>
            <body>${htmlContent}</body>
            <script>
                try {
                    ${jsContent}
                } catch (error) {
                    console.error(error);
                }
            </script>
        </html>
    `);
    iframeDoc.close();
}
document.getElementById("showResultButton").addEventListener("click", showResult);
