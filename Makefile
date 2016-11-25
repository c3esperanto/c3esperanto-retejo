deploy:
	ssh vweb3.f00.net make -C /vhost/zamenhof.chaospage.com/htdocs pull

pull:
	git pull

tidy:
	tidy -m -w 0 -i -utf8 -asxhtml index.html
