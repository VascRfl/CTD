/*	GRUPO
	RAFAEL VASCONCELOS
    GABI NAKASONE
    MARCUS RODRIGUES
    MARCEL GAVA
    MARCOS FONSECA */

USE EMarket;
/*	Operadores & joins
	1. Mostre o contato, o endereço concatenado com a cidade dos clientes
	cuja cidade é ‘London’
	Tabela: clientes
	Campos: Contato, Endereco, Cidade */

SELECT Contato, CONCAT(Endereco,', ',Cidade,', ',CodigoPostal) AS 'Endereço Completo'
	FROM Clientes
	WHERE Cidade = 'London';


/*	2. Concatene o nome e o sobrenome dos empregados e mostre a soma
	dos valores em Transporte para cada um. Ordene os valores de forma
	decrescente.
	Tabelas: empregados, faturas
	Campos: nome, sobrenome, transporte */

SELECT CONCAT(e.Nome,' ',e.Sobrenome) AS 'Nome Completo', CONCAT(ROUND(SUM(f.Transporte),2),' R$') as 'Valor transporte'
	FROM Empregados e
	INNER JOIN Faturas f
	ON e.EmpregadoID = f.EmpregadoID
	GROUP BY e.EmpregadoID DESC;

/*	Funções de agregação
	1. Mostre a data da fatura mais recente
	Tabela: faturas
	Campo: DataFatura */

SELECT MAX(DataFatura) AS 'Menor data'
	FROM Faturas;

/* 	2. Mostre o produto mais barato
	Tabelas: produtos
	Campos: ProdutoNome, PrecoUnitario */

SELECT MIN(PrecoUnitario), ProdutoNome AS 'Menor Preço'
	FROM Produtos
	GROUP BY ProdutoNome
	LIMIT 1;
