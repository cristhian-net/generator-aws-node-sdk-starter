# AWS SDK for Node.js starter

NodeJS starter kit to write AWS scripts using the AWS SDK for Node.js

## Requirements

The only requirement of this application is the Node Package Manager. All other dependencies (including the AWS SDK for
Node.js) can be installed with:

    npm install

## Basic Configuration

You need to set up your AWS security credentials before the code is able to connect to AWS. You can do this by creating
a file named "credentials" at ~/.aws/ (C:\Users\USER_NAME\.aws\ for Windows users) and saving the following lines in the
file:

    [default]
    aws_access_key_id = <your access key id>
    aws_secret_access_key = <your secret key>

See the [Security Credentials](http://aws.amazon.com/security-credentials) page. It's also possible to configure your
credentials via a configuration file or directly in source. See the AWS SDK for Node.js
[Developer Guide](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html) for more information.

## Config file

You can write your environment variables on the `.env` file, which will later be loaded by `dotenv` library to be
available as process.env variables
