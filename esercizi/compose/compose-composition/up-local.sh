#!/usr/bin/env bash
docker-compose -f docker-compose-db.yml -f docker-compose-db-ports.yml -f docker-compose-db-ui.yml -f docker-compose-gw.yml up
