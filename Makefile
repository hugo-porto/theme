.DEFAULT_GOAL: build
.SILENT:

lint:
	npx markdownlint '**/*.md' --ignore node_modules
	npx stylelint '**/*.scss'
@PHONY: lint

dev-tailwind:
	npx tailwindcss -i ./assets/css/tailwind.scss -o ./static/css/tailwind.css --minify --watch
@PHONY: tailwind

dev-hugo:
	hugo server --buildDrafts
@PHONY: dev-hugo

dev:
	make -j 2 dev-tailwind dev-hugo 
@PHONY: dev

build: lint
	rm -rf ./public
	npx tailwindcss -i ./assets/css/tailwind.scss -o ./static/css/tailwind.css --minify
	hugo --minify
@PHONY: build

update:
	npx npm-check-updates -u
	npm install --no-fund --no-audit
@PHONY: update

# Test semantic-release locally (dry-run)
release-dry:
	npx semantic-release --dry-run
@PHONY: release-dry

# Install dependencies
install:
	npm install --no-fund --no-audit
@PHONY: install