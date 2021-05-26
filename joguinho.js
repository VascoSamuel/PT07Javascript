     var nescolhido = prompt ("Escolha um numero de  0 a 100:");
	 document.write(nescolhido + " foi o seu numero escolhido." + "</br>" );
	 
	 var ngerado = Math.floor(Math.random()* 101 );
	 document.write(ngerado + " foi o numero gerado aleatoriamente." + "</br>");
	 
	 if ( nescolhido == ngerado) {
	   document.write("Parabens!! os numeros coincidem e por isso voce acabou de ganhar um steam gift card com o valor de 10 euros." + " </br> " + "HDG3 59FB MD8");
	 }	 
	 else 
	   document.write("Infelizmente os dois numeros nao coincidem , melhor sorte para a proxima. ");