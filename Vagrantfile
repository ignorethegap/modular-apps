# -*- mode: ruby -*-
# vi: set ft=ruby :

#####################################################################################
#                             VAGRANT MAGIC BEGINS HERE                             #
#-----------------------------------------------------------------------------------#
#          For full documentation on vagrant please visit www.vagrantup.com!        #
#####################################################################################


# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|


  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "trusty-server-cloudimg-i386-vagrant-disk"
  config.vm.box_url = 'https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-i386-vagrant-disk1.box'

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  # Needed to acces openerp on its default port 8069 on the host machine. (localhost:8069)
  config.vm.network :forwarded_port, guest: 8069, host: 8069 # odoo

  # Only needed if you want to browse DB from pgadmin or some other pg tool
  config.vm.network :forwarded_port, host: 4321, guest: 5432

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
#  config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.provision "ansible" do |ansible|
    # https://www.vagrantup.com/docs/provisioning/ansible.html      
    ansible.playbook = "VM/playbook.yml"
    ansible.verbose = "v"
    ansible.extra_vars = {
      ansible_ssh_user: "vagrant",
      ansible_ssh_private_key_file: ".vagrant/machines/default/virtualbox/private_key"
    }
    ansible.limit = 'all'
  end

  # The command is run in local-mode on the guest with inventory "127.0.0.1," - comma important to trick the interpreter.
  # config.vm.provision :shell, inline: "ansible-playbook /vagrant/ansible-odoo/playbook.yml -i '127.0.0.1,' --connection=local"
  
#  config.vm.synced_folder "odoo/modules", "/home/odoo/odoo/modules"
end
