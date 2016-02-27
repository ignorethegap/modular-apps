
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
