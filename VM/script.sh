#!/bin/bash

# var definitions - change depending on your infrastructure
# MIRROR_IP=10.0.2.2
# MIRROR_HOSTNAME=mirror
# PORT=3142
# DEB_MIRROR=$MIRROR_HOSTNAME:$PORT

# mirror ip address
# sudo echo "$MIRROR_IP $MIRROR_HOSTNAME" >> /etc/hosts

# apt sources
sudo echo "deb http://ftp.ch.debian.org/debian/ wheezy main contrib non-free" > /etc/apt/sources.list
# sudo echo "deb http://nightly.odoo.com/7.0/nightly/deb/ ./" >> /etc/apt/sources.list

#let's get the latest catalog of packages
sudo apt-get update
#let's get the latest version of software on the OS
sudo apt-get upgrade

sudo apt-get install openerp git
# sudo -u postgres createuser --createdb --no-createrole --no-superuser -w openerp

# Install packages
# sudo apt-get -y  --force-yes install debconf-utils less lsof screen vim git openerp

sudo service openerp stop
sudo update-rc.d -f openerp disable
