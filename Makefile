.DEFAULT_GOAL: build
.SILENT:

VERSION := 0.1
BUILD := $(shell expr $(shell git describe --tag | (cut -d'.' -f3) | (cut -d'-' -f1)) + 1)
RELEASE := v$(VERSION).$(BUILD)

lint:
	markdownlint '**/*.md' --ignore node_modules
	stylelint '**/*.scss'
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

upgrade:
	npm -g ls npm-check-updates | grep -c npm-check-updates || npm install -g npm-check-updates 
	ncu -u &&	npm install --no-fund --no-audit
@PHONY: upgrade

release: build
	npm version --no-git-tag-version $(RELEASE)
	echo $(VERSION).$(BUILD) > layouts/partials/footer/version.html
	git add package.json
	git add package-lock.json
	git add layouts/partials/footer/version.html
	git commit -m "chore(build): release $(RELEASE)"
	git push
	gh release create $(RELEASE) --title 'Release $(RELEASE)' --notes-file release/$(RELEASE).md
	git fetch --tags
.PHONY: release