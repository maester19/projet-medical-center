module.exports = {
  apps : [{
    script: 'app-loinc.js',
    watch: '.',
    exec_mode: "cluster",
    instances: '1',
    max_memory_restart: '500M'
  }]
};
