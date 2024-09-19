build-container:
	docker build -t hypha-ui .

run-container:
	docker run --name hypha-ui -d -p 8080:80 hypha-ui

serve: build-container run-container

lint:
	npm run format && npm run lint