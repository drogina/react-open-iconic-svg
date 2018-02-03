default:
	rm -rf dist
	echo "Removed dist"
	mkdir dist
	echo "Created dist"
	cd node_modules/open-iconic/svg && ../../.bin/svgtoreact dir -o ../../../dist
	echo "svgtoreact complete"
	./node_modules/.bin/babel dist -d dist
	echo "babel complete"
	touch index.js
	echo "index.js created"
	chmod +x generate_index.sh && ./generate_index.sh
	echo "generated index"
