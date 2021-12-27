const fs = require('fs')
const path = './utils/db/serviceAccountKey.json'
const vars = `
    type=${process.env.type}\n
    project_id=${process.env.project_id}\n
    private_key_id=${process.env.private_key_id}\n
    private_key=${process.env.private_key}\n
    client_email=${process.env.client_email}\n
    client_id=${process.env.client_id}\n
    auth_uri=${process.env.auth_uri}\n
    token_uri=${process.env.token_uri}\n
    auth_provider_x509_cert_url=${process.env.auth_provider_x509_cert_url}\n
    client_x509_cert_url=${process.env.client_x509_cert_url}\n
    `
fs.writeFileSync(path, vars)