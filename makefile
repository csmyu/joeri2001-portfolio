info:
	echo "style"

.PHONY: style

style:
	npm run prettier
	npm run lint
