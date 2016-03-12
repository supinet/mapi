#!/bin/bash
echo "STARTING CONFIGURATIONS...";

echo "ENTRE COM O DIRETÓRIO ONDE DESEJA INSTALAR O WILDFLY. EX: /home/usuario";
read WILDFLY_INSTALL;


WILDFLY_DIR=$WILDFLY_INSTALL/wildfly-10.0.0.Final;
			     

echo "DIGITE SUA SENHA PARA UTILIZAÇÃO NO COMANDO SUDO: " 
sudo chmod -R 777 /tmp #SERVE APENAS PARA ABILITAR O SUDO NO CACHE

##################### CRIA BANCO DE DADOS E USUÁRIO ####################

echo "DIGITE A SENHA DO USUARIO ROOT DO MYSQL"
read MYSQL_SENHA;
mysql -u root -p$MYSQL_SENHA -e 'create database mapi'
mysql -u root -p$MYSQL_SENHA -e "grant all privileges on mapi.* to root@localhost identified by 'root'"

######################### ENVIRONMENT VARIABLE #########################
WF_FILE=/etc/profile.d/wf.sh;

if ! [ -f "$WF_FILE" ]; then
	echo "Setting environment variable";
	echo "creating $WF_FILE...";
	sudo echo "export WILDFLY_HOME=/opt/wildfly-10.0.0.Final" >> $WF_FILE;
fi;


######################### WILDFLY SERVER ###############################
cd /tmp;

WILDFLY_ZIP=wildfly-10.0.0.Final.zip;
 
if ! [ -d "$WILDFLY_DIR" ]; then
	if ! [ -f "$WILDFLY_ZIP" ]; then
		echo "DOWNLOADING WILDFLY 10 FINAL...";
		wget http://download.jboss.org/wildfly/10.0.0.Final/wildfly-10.0.0.Final.zip;
	fi;
	echo "EXTRACTING $WILDFLY_ZIP";
	mkdir -p $WILDFLY_INSTALL;
	unzip wildfly-10.0.0.Final.zip -d $WILDFLY_INSTALL;	
fi;

#################### WILDFLY SERVER CONFIGURATION ######################
echo "SETTING THE SERVER WILDFLY";
echo "STARTING SERVER WILDFLY";

$WILDFLY_DIR/bin/./standalone.sh &

sleep 10


######################### ADD MODULOS #################################

MYSQLDRIVER=/tmp/mysql-connector-java-5.1.38.jar;
if ! [ -f $MYSQLDRIVER ]; then
	echo "DOWNLOADING MYSQL DRIVER 5.1.38";
	wget http://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.38/mysql-connector-java-5.1.38.jar;

fi;



$WILDFLY_DIR/bin/./jboss-cli.sh --connect --command='module add --name=com.mysql --resources=/tmp/mysql-connector-java-5.1.38.jar --dependencies=javax.api' 


######################### POOL MYSQL #################################
echo "SETTING POOLS";
													  
$WILDFLY_DIR/bin/./jboss-cli.sh --connect --commands='./subsystem=datasources/jdbc-driver=com.mysql:add(driver-name="com.mysql", driver-module-name="com.mysql", driver-xa-datasource-class-name="com.mysql.jdbc.jdbc2.optional.MysqlXADataSource", driver-class-name="com.mysql.jdbc.Driver" )';

######################### DEFININDO DATASOURCES #################################

echo "SETTING DATASOURCES";
$WILDFLY_DIR/bin/./jboss-cli.sh --connect --commands='./subsystem=datasources/data-source=mapiDS:add(enabled=true , jndi-name="java:/mapiDS" , use-java-context=true, driver-name="com.mysql" , min-pool-size=10 , max-pool-size=100 , pool-prefill=true, user-name="root", password="1" , connection-url="jdbc:mysql://localhost:3306/mapi" )'

sleep 2

killall java

sleep 2

echo "#######################################################";
echo "#                                                     #";
echo "#                                                     #";
echo "#                    TERMINOU                         #";
echo "#######################################################";
