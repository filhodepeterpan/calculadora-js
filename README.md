# Calculadora em JAVASCRIPT
## Utilizando a lib math.js
&nbsp;

**Link para o site**: [Calculadora em JS](https://calculadora-js-jade-kappa.vercel.app/)

&nbsp;

O site tem o objetivo de oferecer a funcionalidade uma calculadora para o usuário. A calculadora foi desenvolvida utilizando a biblioteca math.js e, em específico, a função math.evaluate( ). Esta função avalia a string e retorna uma operação matemática (caso seja válida). Diferente do nativo eval( ), ele não transforma qualquer inserção do input automaticamente em uma linha de código, evitando injeção de código malicioso no dispositivo do usuário. Além disso, alguns cuidados para evitar erros foram tomados:
- O input do id "visor" possui a propriedade "readonly", fazendo com que a inserção de caracteres possa ocorrer somente através das funções dos botões, evitando a digitação direta. **("index.html" - LINHA 14 )**
- Considerando que é fácil remover propriedades de código html através do modo de desenvolvedor, uma validação é feita no JS para evitar caracteres indesejados. Através de um ouvinte de eventos (addEventListener()), toda vez que o valor do input é alterado, é chamada uma função que verifica o caractere digitado. Caso ele não faça parte da expressão regular posta, a função transforma o caractere em uma string vazia. Na prática, ele elimina caracteres que não fazem parte dos botões da calculadora. **("./scripts/script.js" - LINHAS 61-65)**
&nbsp;


