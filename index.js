function onLoadPage() {
    const botaoMais1 = document.getElementById("mais1");
    const botaoMais2 = document.getElementById("mais2");
    const botaoMais3 = document.getElementById("mais3");
    const botaoMais4 = document.getElementById("mais4");
    const botaoMais5 = document.getElementById("mais5");
    const botaoMais6 = document.getElementById("mais6");
    
    const botaoMenos1 = document.getElementById("menos1");
    const botaoMenos2 = document.getElementById("menos2");
    const botaoMenos3 = document.getElementById("menos3");
    const botaoMenos4 = document.getElementById("menos4");
    const botaoMenos5 = document.getElementById("menos5");
    const botaoMenos6 = document.getElementById("menos6");
    

    var count1 = 0;
    const amount1 = document.getElementById('amount1');
    const mais1 = () => {count1++; amount1.value = count1;};
    const menos1 = () => {count1--; amount1.value = count1;} ;
    botaoMais1.addEventListener('click', mais1);
    botaoMenos1.addEventListener('click', menos1);

    var count2 = 0;
    const amount2 = document.getElementById('amount2');
    const mais2 = () => {count2++; amount2.value = count2;};
    const menos2 = () => {count2--; amount2.value = count2;} ;
    botaoMais2.addEventListener('click', mais2);
    botaoMenos2.addEventListener('click', menos2);

    var count3 = 0;
    const amount3 = document.getElementById('amount3');
    const mais3 = () => {count3++; amount3.value = count3;};
    const menos3 = () => {count3--; amount3.value = count3;} ;
    botaoMais3.addEventListener('click', mais3);
    botaoMenos3.addEventListener('click', menos3);

    var count4 = 0;
    const amount4 = document.getElementById('amount4');
    const mais4 = () => {count4++; amount4.value = count4;};
    const menos4 = () => {count4--; amount4.value = count4;} ;
    botaoMais4.addEventListener('click', mais4);
    botaoMenos4.addEventListener('click', menos4);

    var count5 = 0;
    const amount5 = document.getElementById('amount5');
    const mais5 = () => {count5++; amount5.value = count5;};
    const menos5 = () => {count5--; amount5.value = count5;} ;
    botaoMais5.addEventListener('click', mais5);
    botaoMenos5.addEventListener('click', menos5);

    var count6 = 0;
    const amount6 = document.getElementById('amount6');
    const mais6 = () => {count6++; amount6.value = count6;};
    const menos6 = () => {count6--; amount6.value = count6;} ;
    botaoMais6.addEventListener('click', mais6);
    botaoMenos6.addEventListener('click', menos6);
}