
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="./styles/stylesheet1.css">
	<title>Hamburgueria</title>
</head>
<body>
	<div class="container-precoPedido">
		<p class="precoPedido">
			<?php
				$refriQuantidade=$_GET["a"];
				$sucoQuantidade=$_GET["a"];
				$cervejaQuantidade=$_GET["c"];
				$XSaladaQuantidade=$_GET["d"];
				$XBurgerQuantidade=$_GET["e"];
				$XBaconQuantidade=$_GET["f"];

				
				
				$refriValor=3.00;
				$sucoValor=5.50;
				$cervejaValor=6.00;
				$XSaladaValor=7.50;
				$XBurgerValor=9.00;
				$XBaconValor=15.00;
				
				$refri=$refriValor * $refriQuantidade;
				$suco=$sucoValor * $sucoQuantidade;
				$cerveja=$cervejaValor * $cervejaQuantidade;
				$XSalada=$XSaladaValor*$XSaladaQuantidade;
				$XBurger= $XBurgerValor*$XBurgerQuantidade;
				$XBacon=$XBaconValor*$XBaconQuantidade;
				
				$total = $refri + $suco + $cerveja + $XSalada + $XBurger + $XBacon;

				echo "$total";
			?>
		</p>
	</div>
</body>
</html>

<!-- Outro arquivo
	restaurante.php:
	receber as quantidades, criando variáveis.
	colocar os valores dos produtos numa outra variável
	multiplicar as quantidades pelo valor do produto , colocando-as em outras variáveis.
	Somar o total gasto , colocando numa variável.
	Imprimir com uma frase: Ex. Total de gasto=x, usar echo.
	Estilizar.


