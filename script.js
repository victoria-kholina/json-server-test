
fetch ( "https://api.jsonbin.io/b/5f0d9dbc292de94c17503b3c" , {
    headers: {
        "secret-key" : "$2b$10$pDq3QtKfrwesrxwQ59aWIOvaglvZRlTC5HODRHABUQ/1xwYjGf.1m"
    }
} ).then ( response => response.json() )
    .then ( response => console.log(response))
