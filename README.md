#### TRABALHO FINAL ####

### Descrição ###

  O Singleton é um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.

### Onde é recomendada a utilização de Singleton ? ###

  Singleton deve ser utilizado com cautela, pois nem sempre é útil ter apenas uma instância de uma classe sendo compartilhada por toda a aplicação.

  Recomendo utilizar o Singleton:

  1. Quando você precisar controlar a concorrência de acesso a recursos compartilhados;

  2. Quando uma classe for utilizada com frequência por várias partes distintas do sistema, e essa classe não gerencia nenhum estado da aplicação;

### Singleton - Padrão de Projeto ###

   O padrão de projeto singleton tem como definição garantir que uma classe tenha somente uma instância e fornecer um ponto global de acesso a mesma. Para isso, singleton implementa uma operação chamada de Instance que tem como premissa permitir que seus clientes acessem sua única instância, além de ser capaz de criar sua própria instância única.

### Vantagens e perigos ao implementar Singleton ###
   
### Benefícios ###

 1. Acesso controlado à instância única.

 2. Espaço de nomes reduzido.

 3. Permite um refinamento de operações e da representação.

 4. Permite um número variável de instâncias.

 5. Mais flexível do que operações de classes.

### Perigos ao implementar singleton de maneira incorreta ###

 1. Estado global.

 2. Utilização de singleton desnecessários.

 3. Anti-padrões para muitos programadores.

 4. Reversão difícil.

 5. Mais complexidades nos testes.

 6. Pode ser facilmente quebrado.

### Conclusão ###
  
  O padrão singleton e alcançar seus benefícios para o desenvolvimento de um código limpo e seguro. Singleton pode ser implementado de várias formas.Porém, sua utilização exige cuidados e responsabilidades para utilizá-lo de forma correta e coerente.

