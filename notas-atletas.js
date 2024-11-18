let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function aplicacaoNotaMediaAtletas(atletas){
	for(let i=0; i<atletas.length; i++){

		let notasSeparadas = []; 
		let notasMaximas = []; 
		let outrasNotas = []; 

		// Retorna o nome do atleta
		console.log(`Atleta: ${atletas[i].nome}`); 

		// Retorna as notas classificadas
		console.log(`Notas Obtidas: ${atletas[i].notas.sort()}`) 

		for(let n=0; n<atletas[i].notas.length; n++){ // Retorna as notas separadas
			if(atletas[i].notas[n] === 10){
				//console.log(atletas[i].notas[n]);
				notasMaximas.push(atletas[i].notas[n]);
			}else{
				//console.log(atletas[i].notas[n]);
				outrasNotas.push(atletas[i].notas[n]);
			}	
		}
	notasMaximas = notasMaximas.slice(1, notasMaximas.length);
	//console.log(notasMaximas);

	outrasNotas = outrasNotas.slice(1, outrasNotas.length);
	//console.log(outrasNotas);

	notasMaximas.map(function(nota){
		notasSeparadas.push(nota);
	});

	outrasNotas.map(function(nota){
		notasSeparadas.push(nota);
	});

	//console.log(notasSeparadas);
	let soma = 0;
	notasSeparadas.forEach(function(nota){
		//Number.parseFloat(nota);
		//console.log(nota);
		//console.log(soma);
		soma = soma + nota;
	});
	console.log(soma/notasSeparadas.length);
	}
	return "Aplicação finalizada."	
}

console.log(aplicacaoNotaMediaAtletas(atletas));
