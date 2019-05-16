module.exports = {
  apps : [{
    name: 'Orders API',
    cwd: './orders-api-rest',
    script: './index.js',
    args: '--port 8080',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    instances  : 2,
    exec_mode  : "cluster"
  },{
    name: 'Users API',
    cwd: './users-api-rest',
    script: './index.js',
    args: '--port 8081',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  },{
    name: 'Ping/Echo Monitor',
    cwd: './ping-echo-module',
    script: './index.js',
    autorestart: true,
    watch: false
  }]
};
