function myFunction(){
    const input = document.getElementById('check').value;
    let i = Number(input)
    if (typeof i==='number'){
        document.getElementById('then').innerHTML = i ;
        }
    }