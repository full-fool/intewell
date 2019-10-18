# intewell
The static website for Intewell Technology Corporation.
To deploy, use `node server.js`
To set up https, once we lost the private key(.key file), every time we need to create new csr and private key file,  then use csr to generate ca-bundle and crt. refer to https://www.namecheap.com/support/knowledgebase/article.aspx/794/67/how-do-i-activate-an-ssl-certificate. Or we can just keep the files. 
The certificatoin only encodes the domain information, has nothing to do with IP address.
