.DEFAULT_GOAL: build
.SILENT:

lint:
	markdownlint '**/*.md' --ignore node_modules
	stylelint '**/*.scss'
@PHONY: lint

dev-tailwind:
	npx tailwindcss -i ./assets/css/tailwind.scss -o ./static/css/tailwind.css --watch
@PHONY: tailwind

dev-hugo:
	hugo server --buildDrafts
@PHONY: dev-hugo

dev:
	make -j 2 dev-tailwind dev-hugo 
@PHONY: dev

build:
	npx tailwindcss -i ./assets/css/tailwind.scss -o ./static/css/tailwind.css --minify
@PHONY: build

upgrade:
	npm -g ls npm-check-updates | grep -c npm-check-updates || npm install -g npm-check-updates 
	ncu -u &&	npm install --no-fund --no-audit
@PHONY: upgrade