function calcularCalificacion() {
    const nombre = document.getElementById("nombre").value;
    const nota = parseFloat(document.getElementById("nota").value);
    let calificacionLetra;

    if (nota >= 90 && nota <= 100) {calificacionLetra = "A";}

    else if (nota >= 80 && nota < 90) {
        calificacionLetra = "B";} 
    else if (nota >= 70 && nota < 80)
    {calificacionLetra = "C";} 
    else if (nota >= 60 && nota < 70) {calificacionLetra = "D";}
    else if (nota < 60) {calificacionLetra = "F";} 
    else {calificacionLetra = "Nota inválida, ingresa una nota de nuevo.";}

    const resultado = `Nombre: ${nombre}<br>Nota final: ${nota}<br>Calificación en letra: ${calificacionLetra}`;
    document.getElementById("resultado").innerHTML = resultado;}
