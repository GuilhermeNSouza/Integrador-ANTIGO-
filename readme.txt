Projeto Integrador: Vacine+
Integrantes: Guilherme Nário, Adriano Azevedo, Gustavo Ribas e Jhonatan Lopes]

Lista de comandos:
git pull
-Comando atualiza o código, caso tenha ocorrido alguma modificação. Sempre utilizar antes de qualquer outro comando.

git add .
-Prepara o código para sofrer alteração, sempre utilize antes de usar o git commit, push ou a criação de branches e etc...
git commit -m "oque você alterou"
-Manda um comentário com oque você alterou, sempre utilizar antes de um git push.

git push 
-Envia o que você alterou, sempre envie após salvar o código na maquina e após a utilização do git add .

git checkout -b "nome da branche"
-Cria uma nova branche para alteração no código, não é necessário as aspas no comando, não utilize acento ou caracteres especiais como titulo
Obs: após abrir a branche, pode altera-la normalmente (com git commit -m e git push), porém, após alterar deve-se abrir um pull request no git hub para encorpora-lo ao código master