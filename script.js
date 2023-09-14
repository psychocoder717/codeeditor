<script>
    
     function run() 
     {
            let htmlcode = document.getElementById("html-code").value;
            let csscode = document.getElementById("css-code").value;    // for input
            let javascriptcode = document.getElementById("js-code").value;
            let output = document.getElementById("output");

            output.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode + "</style>"; //  output.contentDocument.body.innerHTML  it manipulate the code within the <iframe>   innerHTML provide the feature to access and modifying the html content within the body
            output.contentWindow.eval(javascriptcode);   //eval() function take input as string and execute it as javascript code
     }

     function emptyplaceholder() {
            var textarea = document.getElementById('html-code');
            {
                textarea.placeholder = '';
            }
        }
        function emptyplaceholder1() {
            var textarea = document.getElementById('css-code');
            {
                textarea.placeholder = '';
            }
        }
        function emptyplaceholder2() {
            var textarea = document.getElementById('javascript-code');
            {
                textarea.placeholder = '';
            }
        }  
            </script>