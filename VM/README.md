
Installing Vagrant directly from https://www.vagrantup.com or use how to.

A maintained Ansible playbook is at GitHub osiell/ansible-odoo

OSX
---

```
brew install docker docker-machine
brew install caskroom/cask/brew-cask
brew cask install Caskroom/cask/virtualbox
brew cask install vagrant
brew case install vagrant-manager
brew install ansible
```

Windows
-------

https://github.com/saasbook/courseware/wiki/Setting-Up-Vagrant-Environment-on-Windows-Platform

https://docs.docker.com/machine/install-machine/

Ubuntu
------

https://www.howtoforge.com/tutorial/ubuntu-vagrant-install-and-getting-started/


Digital Ocean
-------------

http://www.theopensourcerer.com/2014/09/how-to-install-openerp-odoo-8-on-ubuntu-server-14-04-lts/

& run

sudo update-rc.d odoo-server defaults

Vagrant
-------

* `vagrant destroy` to get rid of the current vagrant guest build
* `vagrant provision` to re-build VM

Ansible defaults
----------------
postgresql_admin_user: "postgres"
postgresql_default_auth_method: "trust"

Odoo config
-----------

master pass: SuPerPassWorD

odoo admin: admin/SuPerPassWorD

SSH
---
You can access the running VM by the simple command `vagrant ssh`

You can control the VM (and old ones) via the VirtualBox Manager App


Running Ansible Tasks
---------------------

You can run ansible tasks from outside the VM using the `ansible-playbook` command. This is faster than provision and should be mostly equal.

```
ansible-playbook --private-key=.vagrant/machines/default/virtualbox/private_key -u vagrant -i .vagrant/provisioners/ansible/inventory/vagrant_ansible_inventory VM/playbook.yml
```



