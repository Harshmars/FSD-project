        const lenght = 12;
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const number = "0123456789";
        const symbol = "@#$%^&*()_+-|{}[]></~=";
        const allChars = uppercase + lowercase + number + symbol;

        function creatPassowrd(){
            var password="";
            var output=document.getElementById("output");
            while(lenght>password.length){
                password += allChars[Math.floor(Math.random() * allChars.length)];
            }
            
            output.textContent=password;

        }
        function CopyPossword(){
            const textToCopy = document.getElementById('output').innerText;

            // Create a textarea element
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
        
            // Append the textarea to the DOM
            document.body.appendChild(textarea);
        
            // Select the text inside the textarea
            textarea.select();
        
            try {
                // Copy the selected text to the clipboard
                document.execCommand('copy');
                console.log('Text copied to clipboard');
            } catch (err) {
                console.error('Failed to copy text to clipboard:', err);
            }
        
            // Remove the textarea from the DOM
            document.body.removeChild(textarea);

        }