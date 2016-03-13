### mapi (CRUD de CEP com Web Service)

###### O objetivo de mapi 

> Oferecer pesquisa de CEPs do Brasil em Web Service externo qualquer e armazenamento as informações recuperadas em base de dados através de outro Web Service. 

######  Contexto de uso

>O mapi pode ser utilizado por empresas que desejam criar um repositório próprio de gerenciamento de informações de CEP para serem consumidos de forma específica pela empresa.

###### Principais e vantagens de utilização: 

> - Em um e-commerce que faça entrega somente para os CEPs previamente registrados na base de dados;
> - Criar regras de negócios específicas para tomada de decisão para cada CEP cadastrado;

###### Instruções de como o projeto deve ser compilado e executado (Build & development)

Este projeto foi gerado com o [yo angular generator](https://github.com/yeoman/generator-angular) 
versão 0.15.1. 

###### Ambiente de desenvolvimento: S.O Ubuntu 14.04 LTS

###### Preparando o frontend

###### GIT

0 - instalar o git - software de versionamento de arquivos

terminal$: `sudo apt-get install git`

###### NODE

1 - Instalar o servidor “node” dica: se desejar use o nvm (Node Version Manager) para gerenciar as versões e pacotes de cada versão do node isso pode evitar dores de cabeça.

-Formas de instalação:

- 1.1. scprit: [mvn](https://github.com/supinet/mapi/blob/master/ambientes/desenvolvimento/nvm-install.sh)

ou

- 1.2. comando no terminal do linux: 

`sudo curl https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash`

ou 

- 1.3. Wget:

`wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash`

2 - agora sim instalando o servidor node:

2.1. com nvm

- versão mais recente

`nvm install 5.8.0`
	
- versão mais estável

`nvm install 4.4.0`

- comando que informa qual versão do node usar

`mvn use 5.8.0`

ou

2.2. com script [node + npm](https://github.com/supinet/mapi/blob/master/ambientes/desenvolvimento/node-npm-install.sh) 

>instala o node última versão e o npm que é um gerenciador de pacotes e apps, permite compartilhar códigos com outros desenvolvedores;


###### 3 Ferramentas (yeoman, grunt e bower)

>Instalar as ferramentas que irão gerenciar todo o processo de desenvolvimento do frontend e gerenciamento de dependências e tarefas como (minificação, compressão de imagens, etc)

3.1. no terminal$: 

`npm install -g yo generator-angular-fullstack bower grunt-cli`

`-g` informa que é para uso global;

`yo generator-angular-fullstack` é o yeoman que cria ambientes organizados para desenvolvimento do angular no nosso caso;

`bower` super importante para o gerenciamento das dependências do angular; e

`grunt-cli` automatizador de tarefas de minificação, compressão de imagens e muito mais.

Após tudo instalado e funcionando vamos checar as versões:

- no terminal$ digite: 

`node -v`

> v5.8.0

`npm version`

	>{ npm: '3.8.0',
		ares: '1.10.1-DEV',
		http_parser: '2.6.1',
		icu: '56.1',
		modules: '47',
		node: '5.6.0',
		openssl: '1.0.2f',
		uv: '1.8.0',
		v8: '4.6.85.31',
		zlib: '1.2.8' }

######
Baixando o projeto para o ambiente de desenvolvimento

1. entre no diretório `cd /home/usuario/`

dentro do diretório digite `mkdir mapi`

2. faça o clone do projeto: 

`git clone git://github.com/supinet/mapi.git`

3. dentro da pasta mapi digite:

`grunt build` para realizar a compilação do projeto e depois:

`sudo grunt serve` 

>se tudo deu certo vai abrir no navegador padrão à página inicial do yeoman, clique no menu Cep e digite um CEP para buscar no servidor: http://correiosapi.apphb.com/cep/


###### Preparando o backend


Run `grunt` for building and `grunt serve` for preview. 

### Testing 

Running `grunt test` will run the unit tests with karma. 

### Criando o Ambiente de Produção
1. Instalar um sistema operacional (S.O.) [Linux](https://www.debian.org/distrib/) ou [Windows](https://www.microsoft.com/pt-br/download/confirmation.aspx?id=5842);
2. Instalar a JRE do JAVA, de acordo com o S.O. utilizado: [JRE JAVA](http://www.java.com/pt_BR/download/manual.jsp);
* 
3. Instalar o servidor de aplicação [Wildfly 10 Final](http://wildfly.org/downloads/) de acordo com o S.O;
4. Instalar o sistema gerenciador de banco de dados [Mysql Server 5](http://dev.mysql.com/downloads/mysql/) de acordo com o S.O.