TAG ?= latest

build-image:
	docker build -t hypha-ui:$(TAG) .

demo-up:
	$(MAKE) build-image;
	@TAG=$(TAG) docker-compose -f dev/docker-compose.yaml up -d --force-recreate;

demo-down:
	docker-compose -f dev/docker-compose.yaml down

lint:
	npm run format && npm run lint
