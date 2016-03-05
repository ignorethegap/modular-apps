# -*- coding: utf-8 -*-
from openerp import http

class Academy(http.Controller):
    @http.route('/academy/', auth='public')
    def index(self):
        return "Hello, world!"
    