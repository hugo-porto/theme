.DEFAULT_GOAL: lint
.NOTPARALLEL:
.SILENT:

lint:
	markdownlint **/*.md
@PHONY: lint