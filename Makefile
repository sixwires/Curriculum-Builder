style: 
	yarn format

clean:
	rm -rf */*/*.js */*/*.map node_modules bower_components

reset:
	$(MAKE) clean
	$(MAKE) init

init:
	yarn install 

run:
	yarn dev