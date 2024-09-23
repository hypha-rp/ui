TAG ?= latest

build-image:
	docker build -t hypha-ui:$(TAG) .

demo-up:
	@TAG=$(TAG) docker-compose -f dev/docker-compose.yaml up -d --force-recreate --build;

demo-down:
	docker-compose -f dev/docker-compose.yaml down

lint:
	npm run format && npm run lint

report-results:
ifndef PRODUCT_ID
	$(error PRODUCT_ID is not set)
endif
	curl -X POST http://louseal:8081/report/results \
		-F "productId=$(PRODUCT_ID)" \
		-F "file=@./dev/junit-example.xml"