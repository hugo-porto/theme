.DEFAULT_GOAL: lint
.NOTPARALLEL:
.SILENT:

lint:
	markdownlint '**/*.md' --ignore node_modules
@PHONY: lint

dev: lint
	hugo server --buildDrafts --buildFuture --disableFastRender --noHTTPCache  --navigateToChanged --templateMetricsHints --templateMetrics --verbose --watch --port 1313
@PHONY: dev

dev-theme: lint
	HUGO_MODULE_REPLACEMENTS="github.com/hugo-porto/theme->../../hugo-porto/theme" hugo server --buildDrafts --buildFuture --disableFastRender --noHTTPCache  --navigateToChanged --templateMetricsHints --templateMetrics --verbose --watch --port 1313
@PHONY: dev-theme

clean:
	rm -rf public
	rm -rf resources
@PHONY: clean

build: clean
	hugo --gc --minify --cleanDestinationDir
.PHONY: build

upgrade:
	npm -g ls npm-check-updates | grep -c npm-check-updates || npm install -g npm-check-updates 
	ncu -u &&	npm install --no-fund --no-audit
	hugo mod get -u ./...
	hugo mod tidy
@PHONY: upgrade