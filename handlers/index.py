#!/usr/bin/env python2
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
import os
import markdown
import codecs
import datetime
import time
from .base import *
def SingleFileHandler(file_path):
	f = codecs.open(file_path, mode='r', encoding='utf8')
	lines = []
	try:
		lines = f.readlines()
	except:
		pass
	f.close()
	
	ret = {}
	title = ''
	date = ''
	tags=''
	index = 1

	for line in lines[1:]:
		index += 1
		if line.find('title: ') == 0:
			title = line.replace('title: "','')[0:-2]
		if line.find('date: ') == 0:
			date = line.replace('date: ','')[0:-1]
		if line.find('tags: ') == 0:
			tags = line.replace('tags: ','')[0:-1]
		if line.find('---') == 0:
			break

	content = u'';
	for line in lines[index:]:
		content += line
		
	if title:
		ret['title'] = title
		ret['date'] = date
		ret['tags'] = tags
		ret['content'] = markdown.markdown(content)
		ret['name'] = file_path.split(os.sep)[-1].split('.')[0]		
	return ret

class IndexHandler(BaseHandler):
    def get(self):
    	articles = []
    	post_dir =site_config["post_dir"]
    	file_list=[]
    	files=os.listdir(post_dir)
    	try:
    		p=int(self.get_argument('p','0'))	
    	except:
    		print 'Some Error Happen Line 58'
    		p=0
    	for f in files:
    		if (not f.startswith('.')):
    			file_list.append(post_dir+os.sep+f)
    	file_list.sort(reverse=True)
    	if p>len(file_list):
    		p=0
    	for single_file in file_list[p:p+3]:
    		article=SingleFileHandler(single_file)
    		if article:
    			articles.append(article)
    	if p>2:
    		prev=True
    	else:
    		prev=False
    	if p+4<=len(file_list):
    		next=True
    	else:
    		next=False
        self.render("index.html", title=site_config['title'], articles = articles,prev=prev, next=next, prevnum=p-3, nextnum=p+3,tags=tags)
class PostsHandler(BaseHandler):
	def get(self,id):
		post_path = site_config["post_dir"] + os.sep + id.replace('.','') + '.markdown'
		if os.path.exists(post_path):
			article = SingleFileHandler(post_path)
		else:
			raise HTTPError(404)
			return	
		self.render("article.html", url=site_config["url"], article = article,tags=tags)
class RSSOutput(BaseHandler):
	def get(self):
		articles = []
		post_dir = site_config["post_dir"]
		file_list = []
		files = os.listdir(post_dir)
		for f in files:
			file_list.append(post_dir + os.sep + f)
		file_list.sort(reverse=True)
		for single_file in file_list:
			article = SingleFileHandler(single_file)
			if article: articles.append(article)
		self.set_header("Content-Type", "application/rss+xml")
		self.render("feed.xml",articles=articles)
class NotFounderHandler(BaseHandler):
	def prepare(self):
		raise HTTPError(404)
class ArchivesHandler(BaseHandler):
	"""docstring for ArchivesHandler"""
	def get(self,id):
		articles = []
		post_dir = site_config["post_dir"]
		file_list = []
		files = os.listdir(post_dir)
		for f in files:
			if f.startswith(id[0:4]) and (not f.startswith('.')):
				file_list.append(post_dir + os.sep + f)
		file_list.sort(reverse=True)
		for single_file in file_list:
			article = SingleFileHandler(single_file)
			if article: articles.append(article)
		self.render("archives.html",title=site_config['title'], articles = articles,tags=tags)
class TagsHandler(BaseHandler):
	def get(self,tag):
		articles = []
		post_dir = site_config["post_dir"]
		file_list = []
		files=os.listdir(post_dir)
		for f in files:
			if (not f.startswith('.')):
				file_list.append(post_dir + os.sep + f)
		file_list.sort(reverse=True)
		for single_file in file_list:
			article = SingleFileHandler(single_file)
			if article['tags'].find(tag) != -1:
				articles.append(article)
		self.render("index.html", title=site_config['title'], articles = articles,prev=False, next=False, tags=tags)
		

class AboutHandler(BaseHandler):
	def get(self):
		about_path=os.getcwd() + os.sep + 'posts'+os.sep+'.about.markdown'
		if os.path.exists(about_path):
			article=SingleFileHandler(about_path)
		else:
			raise HTTPError(404)
			return	
		self.render("article.html", url=site_config["url"], article = article,tags=tags)
		
handlers = [
        (r"/", IndexHandler),
        (r"/posts/(.*)",PostsHandler),
        (r"/feed",RSSOutput),
        (r"/archives/(.*)",ArchivesHandler),
        (r"/tags/(.*)",TagsHandler),
        (r"/about",AboutHandler),
        (r"/.*",NotFounderHandler)
        ]
