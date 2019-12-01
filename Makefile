all:
	jekyll build
	make upload

upload:
	scp -r dosieroj/ nombrilo/ _site/* c3eo.chaotik.de:/vhost/c3eo.chaotik.de/htdocs/


