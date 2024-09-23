# Splice
## remove um ou mais elementos de uma posição específica de um array. O primeiro parâmetro de splice() é o índice inicial , enquanto o segundo é o número de itens a serem removidos do array. Exemplo: ( splice(1, 3) ) significa: "Começar no índice 1 e remover 3 elementos". Se o segundo argumento não for fornecido, os elementos serão removidos até o final.

## também pode adicionar elementos. Se você especificar argumentos adicionais após o índice inicial e o número de elementos a serem removidos eles serão inseridos na posição indicada. Exemplo: ( splice(2, 1, 'Ar', 'Kr', 'Xn') ) significa: "Começar no índice 2, remover 1 elemento e adicionar as strings 'Ar', 'Kr', 'Xn'". Não precisa remover nenhum elemento do array, também pode simplesmente usar 0 como o segundo argumento. Os elementos serão adicionados começando no índice especificado, sem remover nenhum item.