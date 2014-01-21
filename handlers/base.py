#!/usr/bin/env python2
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
import os
import linecache
from collections import Counter
import logging
import tornado.web
import tornado.websocket
from tornado.web import HTTPError
from tornado.options import options
site_config = {
    "title" : "IceHoney!",
    "url" : """http://blog.icehoney.me""",
    "post_dir": os.getcwd() + os.sep + 'posts',
}
__ALL__ = ['HTTPError', 'BaseHandler', 'BaseWebSocket', 'BaseUIModule', ]

def TagsReader(post_dir):
    tags=[]
    files=os.listdir(post_dir)
    for f in files:
        if  f.startswith('.'):
            continue
        post_path = site_config["post_dir"] + os.sep+f
        tag=linecache.getline(post_path, 6)[6:-1]
        for word in tag.split(' '):
            tags.append(word)
    tags=dict(Counter(tags).items())
    return tags
tags=TagsReader(site_config["post_dir"])

class BaseHandler(tornado.web.RequestHandler):
    application_export = set(())
    def __getattr__(self, key):
        if key in self.application_export:
            return getattr(self.application, key)
        super(BaseHandler, self).__getattr__(key)

    def render_string(self, template_name, **kwargs):
        if "options" not in kwargs:
            kwargs["options"] = options
        return super(BaseHandler, self).render_string(template_name, **kwargs)
    def write_error(self, status_code, **kwargs):
        if status_code==404:
            self.set_status(404)
            self.render("404.html",title="404 NOT FOUND",url=site_config['url'],tags=tags)
        else:
            super(BaseHandler,self).write_error(status_code,**kwargs)


class BaseWebSocket(tornado.websocket.WebSocketHandler):
    pass

class BaseUIModule(tornado.web.UIModule):
    pass
