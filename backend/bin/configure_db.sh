#!/bin/bash

echo "Configuring Db"

echo "Hostname:"
read hostname

echo "port:"
read port

export PGPASSWORD='node_pass'

echo "Dropping db"
dropdb -h $hostname -p $port -U node_user dragonstackdb
echo "Db dropped"

echo "Creating db"
createdb -h $hostname -p $port -U node_user dragonstackdb
echo "Db Created"

echo "Creating tables"
psql -h $hostname -p $port -U node_user dragonstackdb < ./bin/sql/generation.sql
psql -h $hostname -p $port -U node_user dragonstackdb < ./bin/sql/dragon.sql
echo "Tables created"

echo "Db Configured"