# Sort
## Se quiser classificar um array, você pode usar sort(). Este método classifica os elementos do array no lugar. Ele muda o array no qual está agindo. O procedimento de classificação padrão avalia valores de ponto Unicode e, às vezes, pode levar a resultados inesperados. Por esse motivo, é melhor passar sort()uma função de retorno de chamada para que os elementos possam ser classificados de acordo com o valor de retorno do retorno de chamada. Exemplo: Os elementos representados pelos parâmetros a e b  são comparados dois de cada vez. Se o valor de retorno for positivo, a é colocado depois de b. Se for negativo, b é colocado depois de a. Enquanto que se o valor de retorno for 0, a ordem original é mantida. A função de retorno de chamada é implementada por um operador ternário, para considerar os três resultados possíveis da comparação.