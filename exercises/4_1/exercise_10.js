let custo = 200, preco = 250;
let lucro = 0;

if (custo < 0 || preco < 0 || preco < custo) 
{
    console.log("Error");
}
else
{
    custo *= .8;
    lucro = (preco - custo)*1000;
}

console.log(lucro);
