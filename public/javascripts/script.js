function printUser(){
    const id = document.getElementById('id').value;
    fetch('/users/' + id).then(res => {
        if(res.status === 200){
            res.json().then(data => {
                console.log(data);
                document.getElementById('name').value = data.name;
                data.items.forEach(item => {
                    if(item)
                        document.getElementById('items').value += item.description + '\n';   
                });         
                document.getElementById('image').src = data.images[1].url;
            });
        } else {
            alert('Error');
        }
    }, error => {
        alert('Error');
    });
}