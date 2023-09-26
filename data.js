for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log({ i });
  }, 0);
}

// First
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log({ i });
  }, 0);
}

// Second
for (var i = 0; i < 5; i++) {
  function run() {
    setTimeout(() => {
      console.log({ i });
    }, 0);
  }

  run(i);
}

// Second
for (var i = 0; i < 5; i++) {
  ((i) => {
    setTimeout(() => {
      console.log({ i });
    }, 0);
  })(i);
}

for (var i = 0; i < 5; i++) {
  let j = i;
  setTimeout(() => {
    console.log({ j });
  }, 0);
}
