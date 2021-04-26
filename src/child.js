const version = process.argv[2];

setTimeout(() => {
  process.send({ method: 'version', result: { version } });
}, 3000);
