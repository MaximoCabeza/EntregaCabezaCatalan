
function capturar(){
    function Persona(nombre,edad,sexo,candidato){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
        this.candidato=candidato;
    }
    var nombreCapturar = document.getElementById('nombre').value;

    var edadCapturar = document.getElementById('edad').value;

    var sexoCapturar = document.getElementById('sexo').value;

    var candidatoCapturar = document.getElementById('candidato').value;

    nuevoSujeto = new Persona(nombreCapturar,edadCapturar,sexoCapturar,candidatoCapturar);
    console.log(nuevoSujeto)
    agregar()
    }

    var baseDatos= [];
    function agregar(){
        baseDatos.push(nuevoSujeto);
        console.log(baseDatos)
        document.getElementById('tabla').innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'</td><td>'+nuevoSujeto.sexo+'</td><td>'+nuevoSujeto.candidato+'</td></tbody>'
    };





    const votantes = `[
        {
            "nombre": "Maximo",
            "edad": 24,
            "genero": "Hombre",
            "lista": "Lista C"
        },
    
        {
            "nombre": "Lorena",
            "edad": 35,
            "genero": "Mujer",
            "lista": "Lista B"
        },
    
        {
            "nombre": "Karen",
            "edad": 40,
            "genero": "no Binario",
            "lista": "Lista A"
        },

        {
            "nombre": "Axel",
            "edad": 25,
            "genero": "Hombre",
            "lista": "Lista A"
        },
    
        {
            "nombre": "Catalina",
            "edad": 22,
            "genero": "Mujer",
            "lista": "Lista C"
        }
    ]
    `;

    let votantesAsString = JSON.stringify(votantes);
    localStorage.setItem('votantes', votantesAsString);

    votantesAsString=localStorage.getItem('votantes');
    const votantesAsObject=JSON.parse(votantesAsString);
    console.log(votantesAsObject)
