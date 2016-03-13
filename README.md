#### mapi (CRUD de CEP com Web Service)

###### O objetivo de mapi 

> Oferecer pesquisa de CEPs do Brasil em Web Service externo qualquer e armazenamento as informações recuperadas em base de dados através de outro Web Service. 

######  Contexto de uso

>O mapi pode ser utilizado por empresas que desejam criar um repositório próprio de gerenciamento de informações de CEP para serem consumidos de forma específica pela empresa.

###### Principais e vantagens de utilização: 

> - Em um e-commerce que faça entrega somente para os CEPs previamente registrados na base de dados;
> - Criar regras de negócios específicas para tomada de decisão para cada CEP cadastrado;

###### Instruções de como o projeto deve ser compilado e executado (Build & development)

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

Este projeto foi gerado com o [yo angular generator](https://github.com/yeoman/generator-angular) 
versão 0.15.1. 

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

	{ npm: '3.8.0',
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

1 - entre no diretório `cd /home/usuario/`

dentro do diretório digite `mkdir mapi`

2 - faça o clone do projeto: 

`git clone git://github.com/supinet/mapi.git`

3 - dentro da pasta mapi digite:

`grunt build` para realizar a compilação do projeto e depois:

`sudo grunt serve` 

>se tudo deu certo vai abrir no navegador padrão à página inicial do yeoman, clique no menu Cep e digite um CEP para buscar no servidor: http://correiosapi.apphb.com/cep/

> mas se o navegador padrão não abriu, abra-o e digite `http://localhost:9000/#/mapi/`

###### Preparando o backend

Faça o download do JDK 8

1. Em qualquer navegador vá para a página de download do [Oracle Java SE]
(http://www.oracle.com/technetwork/java/javaee/downloads/jdk8-downloads-2133151.html);
2. Selecione Java JDK 8 download para o seu sistema operacional
3. Copie a URL com a extensão do arquivo tar.gz não o RPM (redhat).
4. Copie o arquivo para a pasta cd /opt
5. Ou pela linha de comando de dentro da pasta /opt:

`sudo wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u45-b14/jdk-8u45-linux-x64.tar.gz"
`

6. Extraia o arquivo baixado dentro da pasta: `cd /opt` digite `sudo tar xzf jdk-*.tar.gz`
7.  Instale o JDK com a forma “alternatives”, voce poderá manter outras versões no futuro:

`cd /opt/jdk1.8.0_45/`

`update-alternatives --install /usr/bin/java java /opt/jdk/jdk1.8.0_05/bin/java 100
`

`update-alternatives --install /usr/bin/javac javac /opt/jdk/jdk1.8.0_05/bin/javac 100`

saída de informação será:

>java -version java version "1.8.0_45" Java(TM) SE Runtime Environment (build 1.8.0_45-b14) Java HotSpot(TM) 64-Bit Server VM (build 25.45-b02, mixed mode)

Para checar se está tudo certo digite:

`java -version`

>java version "1.8.0_31"
Java(TM) SE Runtime Environment (build 1.8.0_31-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.31-b07, mixed mode)

e

`javac -version`

>javac 1.8.0_31

###### Servidor de aplicativo Wildfly atende a especificação javaee7

1. Instalar o servidor de aplicação [Wildfly 10 Final](http://wildfly.org/downloads/) de acordo com o S.O;
2. copiar o arquivo para a pasta `cd /opt` ou outra de sua preferência;
3. extrair o arquivo `sudo tar xzf wildfly*.tar.gz`
4. modificar a permissão do arquivo para permitir execução: `/opt/wildfly-10.0.0.Final/bin/run.sh` digite o comando no terminal  `sudo chmod +x run.sh`

Ou utilizar o script de instalação do [wildfly-10.0.0.Final] (https://github.com/supinet/mapi/blob/master/ambientes/producao/wildfly-install.sh)

> o qual também irá instalar o módulo do mysql “jar” e seu respectivo drive de conexão para o qual será utilizado para conectar com o banco de dados.

* Para testar se deu tudo certo execute: `/opt/wildfly-10.0.0.CR4/bin/run.sh`

- deverá aparecer a seguinte saída de informação no terminal

>INFO  [org.jboss.as] (Controller Boot Thread) WFLYSRV0025: WildFly Full 10.0.0.Final (WildFly Core 2.0.0.CR8) started in 9394ms - Started 539 of 784 services (350 services are lazy, passive or on-demand)

###### IDE de desenvolvimento

> Pode ser desde o editor de texto até ferramentas altamente produtivas como [Eclipse](https://www.eclipse.org/downloads/), [IntelliJ](https://www.jetbrains.com/idea/download/#section=linux) e [Netbeans](https://netbeans.org/downloads/). Sugiro a utilização do “Eclipse”

###### Compilando o backend

1. Abra o eclipse;
2. Escolha um workspace de sua preferência “local onde será compilado o projeto”;
3. Clique no menu - file - import - na janela escolha **General** **_Projects_ _from_ _Folder_** e selecione a pasta onde foi **clonado** o projeto pelo comando `git clone git://github.com/supinet/mapi.git` clique em finish;
4. clique em cima do nome do projeto “mapi” e pressione `Alt + F5` para o maven*** atualizar dependências;
5. Clique no meu **Project** - Clean e já janela clique em **OK** para compilar o projeto;
5. Adicione o servidor wildfly-10.0.0.Final que foi instalado na pasta `/opt/wildfly-10.0.0.CR4/` pressione as telcas `Crtl + 3` e digite a palavra `server` clique na opção `view servers`;
6. Abaixo aparecerá uma aba e um espaço em branco para adicionar o servidor;
7. Clique com o botão direito do mouse e New – Server;
8. Procure por wildfly 10 e **Next**, novamente **Next**;
9. **_ATENÇÃO_** clique no projeto _mapi_ no lado esquerdo **Available:** e depois no botão “Add > “;
10. Marque o servidor Wildfly e clique com botão direito do mouse e depois clique em **Start**;

> O webservice deverá ser iniciado e você poderá testar a aplicação pelo `http://localhost:9000/#/mapi/`

### Criando o Ambiente de Produção

1. Instalar um sistema operacional (S.O.) [Linux](https://www.debian.org/distrib/) ou [Windows](https://www.microsoft.com/pt-br/download/confirmation.aspx?id=5842);
2. Instalar a JRE do JAVA, de acordo com o S.O. utilizado: [JRE JAVA](http://www.java.com/pt_BR/download/manual.jsp);
3. Instalar o servidor de aplicação [Wildfly 10 Final](http://wildfly.org/downloads/) de acordo com o S.O; ou utilizar o **script de instalação** do [wildfly-10.0.0.Final] (https://github.com/supinet/mapi/blob/master/ambientes/producao/wildfly-install.sh)
4. Instalar o sistema gerenciador de banco de dados [Mysql Server 5](http://dev.mysql.com/downloads/: mysql/) de acordo com o S.O.
5. Copiar o `mapi.war` para a pasta `/opt/wildfly-10.0.0.Final/standalone/deployments/`

**Fim**