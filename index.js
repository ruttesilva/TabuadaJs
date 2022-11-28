let resultado;

numero = prompt("Tabuada do número: ")

if (numero < 0 || numero > 10)

{
    alert("Digite números de 0 a 10")
}

else
{
    let contador = 0;

    while (contador <= 10)
    {
        resultado = numero * contador

        document.write(numero + "*" + contador + "=" + resultado + "<br>")
        contador++
    }
}