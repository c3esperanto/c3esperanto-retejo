deploy:
	ssh -A vweb3.f00.net make -C /vhost/c3eo.chaotik.de/htdocs pull

pull:
	git pull

tidy:
	tidy -m -w 0 -i -utf8 -asxhtml index.html
