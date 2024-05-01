.DEFAULT_GOAL: build
.NOTPARALLEL:
.SILENT:

lint:
	markdownlint '**/*.md' --ignore node_modules
	stylelint '**/*.scss'
@PHONY: lint

tailwind:
	npx tailwindcss -i ./assets/css/tailwind.scss -o ./static/css/tailwind.css --watch
@PHONY: tailwind

build:
		npx tailwindcss -i ./assets/css/tailwind.scss -o ./static/css/tailwind.css --minify
@PHONY: build

dev:
	hugo server --buildDrafts
@PHONY: dev

upgrade:
	npm -g ls npm-check-updates | grep -c npm-check-updates || npm install -g npm-check-updates 
	ncu -u &&	npm install --no-fund --no-audit
@PHONY: upgrade