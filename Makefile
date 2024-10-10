TAG ?= latest

build-image:
	docker build --no-cache -t hypha-ui:$(TAG) .

lint:
	npm run format && npm run lint

#######################################
### Development Environment Targets ###
#######################################

dev-up: build-image
	@TAG=$(TAG) docker-compose -f dev-tools/docker/ui-compose.yaml up -d --force-recreate;

dev-down:
	docker-compose -f dev-tools/docker/ui-compose.yaml down

dev-test: dev-down dev-up dev-product-create-and-report

dev-product-create-and-report:
	sleep 10
	./dev-tools/scripts/create-product-report-results.sh