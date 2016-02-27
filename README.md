## Modular apps

[![Build Status](https://travis-ci.org/ignorethegap/modular-apps.svg)](https://travis-ci.org/ignorethegap/modular-apps)

Collection of sample Website, Web App, Mobile App, Iconography and common Libraries.
In your own company you might break these out as separate repositories

### website.com

In website.com you have a jQuery based site that was written a while ago and still works fine.
Some of the functionality is needed in apps so you want to extract it to common libraries.

### sales.website.com

In sales.website.com you have an Angular based web app for partners and sales agents.


Dependencies
------------

* VirtualBox
* Vagrant 1.6.1
* Ansible

Setup
-----

### Up and running without a backend

You can develop without a backend limiting the amount of testing possible.

```
npm install
npm start
```

### Odoo backend

As a sample backend Odoo represents your own Enterprise systems (ERP/CRM/etc)

1. Download and Install Ansible http://docs.ansible.com/intro_installation.html


1. Download and install vagrant (the OR based wget allows COVETEL people to get it from a local mirror)

   ```
$ wget http://mirror/files/deb/vagrant_1.6.2_x86_64.deb || wget http://dl.bintray.com/mitchellh/vagrant/vagrant_1.6.3_x86_64.deb
$ sudo dpkg -i vagrant_1.6.2_x86_64.deb

   ```

1. Setup vagrant box.

   ```
$ vagrant box add debian7 http://iweb.dl.sourceforge.net/project/vagrantdebianboxes/debianwheezy.box

   ```

1. Clone this repository

   ```
$ git clone https://github.com/Covetel/odoo-vagrant.git

   ```
1. Create `addons` directory

   ```
$ cd odoo-vagrant
$ mkdir ../addons
   ```
1. Edit file `script.sh` and set `$MIRROR_IP` to your IP address mirror.
1. Vagrant up

   ```
$ cd odoo-vagrant
$ vagrant up
   ```
