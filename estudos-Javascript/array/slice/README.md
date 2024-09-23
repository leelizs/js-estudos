# Slice
## Todas as operações comuns para copiar um array em JavaScript geram uma cópia superficial, inves de uma cópia profunda do array original. Isso significa que, ao mutar a cópia, você pode alterar o array original também. O slice() método permite que você copie um array inteiro, ou apenas uma parte dele sem alterá-lo. Como parâmetros, ele pega o índice inicial e o índice final (não incluso) para copiar. Quando chamado sem argumentos, slice() cria uma duplicata de todo o array.