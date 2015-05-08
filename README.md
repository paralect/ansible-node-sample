Sample node.js app deployment with Ansible
===

Install ansible: [Ansible](http://docs.ansible.com/intro_installation.html)


Deploying app
--
```
cd deploy
ansible-playbook deploy.yml -i demo -u root -e env=demo
```
